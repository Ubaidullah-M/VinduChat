import json
from channels.generic.websocket import AsyncWebsocketConsumer
from django.db.models import Q
from channels.db import database_sync_to_async
from .models import Chat, Message, User
from django.contrib.auth import get_user_model
from rest_framework_simplejwt.tokens import AccessToken, TokenError
from .serializers import MessageSerializer, ChatSerializer

class ChatConsumer(AsyncWebsocketConsumer):
    @database_sync_to_async
    def get_chat(self, chat_id, user):
        return Chat.objects.get(Q(id=chat_id), (Q(msg_receiver=user) | Q(msg_sender=user)))

    @database_sync_to_async
    def create_message(self, message, sender, id):
        return Message.objects.create(message=message, sender=sender, id=id, chat=self.chat)

    async def connect(self):
        if b"authorization" in self.scope["headers"]:
            jwt_token = self.scope["headers"][b"authorization"].decode("utf-8").split(" ")[1]

            if jwt_token:
                try:
                    await self.authenticate_user_jwt(jwt_token)
                    user = self.scope['user']
                    chat_pk = self.scope['url_route']['kwargs'].get('chat_pk')
                    try:
                        self.chat = await self.get_chat(chat_pk, user)
                        self.room_name = f'chat.{chat_pk}'
                        await self.channel_layer.group_add(self.room_name, self.channel_name)
                        await self.accept()
                    except Chat.DoesNotExist:
                        await self.close()
                except Exception as e:
                    await self.close()
            else:
                await self.close()
        else:
            await self.close()

    @database_sync_to_async
    def authenticate_user_jwt(self, jwt_token):
        try:
            # Validate the JWT token and retrieve the user
            access_token = AccessToken(jwt_token)
            user = access_token.payload.get('user_id')

            if user:
                self.scope['user'] = user
            else:
                raise Exception("Authentication error: Invalid token")
        except TokenError as e:
            raise Exception("Authentication error: Invalid token")

    async def disconnect(self, code):
        if hasattr(self, 'room_name'):
            await self.channel_layer.group_discard(self.room_name, self.channel_name)

    async def receive(self, text_data):
        sender = self.scope['user']
        payload = json.loads(text_data)
        message = payload.get('message')
        id = payload.get('id')

        if not message or message.isspace():
            await self.send(json.dumps({
                'type': 'error',
                'data': {'message': 'Please enter a message'}
            }))
        else:
            if self.chat.msg_sender == sender or self.chat.msg_receiver == sender:
                try:
                    msg_obj = await self.create_message(message, sender, id) 
                    await self.channel_layer.group_send(
                        self.room_name,
                        {
                            'type': 'chat_received',
                            'message': message,
                            'id': str(msg_obj.id),
                            'sender_channel_name': self.channel_name,
                        }
                    )
                except Exception as e:
                    await self.send(json.dumps({
                        'type': 'error',
                        'data': {
                            'message': 'There was an error sending your message'
                        }
                    }))
            else:
                await self.send(json.dumps({
                    'type': 'error',
                    'data': {
                        'message': 'You are not authorized to send messages in this chat'
                    }
                }))


    async def chat_message(self, event):
        await self.send(text_data=json.dumps({
            'type': 'chat_message',
            'data': {
                'message': event['message'],
                'id': event['id'],
                'received': event['received']
            }
        }))

    async def chat_received(self, event):
        if self.channel_name != event['sender_channel_name']:
            await self.send(json.dumps({
                'type': 'chat_message',
                'data': {
                    'message': event['message'],
                    'id': event['id'],
                    'received': True
                }
            }))