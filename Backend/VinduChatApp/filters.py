from django_filters import rest_framework as filters
from .models import Message, Chat

class ChatFilter(filters.FilterSet):
    email= filters.CharFilter(lookup_expr='icontains', field_name='email')

    class Meta:
        model = Chat
        fields = ['email']

class MessageFilter(filters.FilterSet):
    message = filters.CharFilter(lookup_expr='icontains', field_name='message')
    chat__msg_sender = filters.CharFilter(lookup_expr='exact', field_name='chat__msg_sender')
    chat__msg_receiver = filters.CharFilter(lookup_expr='exact', field_name='chat__msg_receiver')

    class Meta:
        model = Message
        fields = ['message', 'chat__msg_sender', 'chat__msg_receiver']