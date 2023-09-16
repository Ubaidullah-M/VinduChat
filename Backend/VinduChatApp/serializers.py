from .models import User, Profile, Message, Chat
from rest_framework import serializers
from django.contrib.auth import get_user_model
from rest_framework.exceptions import APIException, ValidationError
from logging import getLogger


logger = getLogger('chat_serializers')
User = get_user_model()

class SignUpSerializer(serializers.ModelSerializer):
    class Meta():
        model = User
        fields = ["id", "email", "password"]
        

    def validate(self, attrs):
        email_exists = User.objects.filter(email=attrs["email"]).exists()
        if email_exists:
            raise ValidationError("Email has already been used")
        return super().validate(attrs)

    def create(self, validated_data):
        password = validated_data.pop("password")
        user = super().create(validated_data)
        user.set_password(password)
        user.save()
        return user
    
    def to_representation(self, instance):
        # Exclude the 'password' field from the response
        ret = super().to_representation(instance)
        ret.pop('password', None)
        return ret


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = "__all__"


class MessageSerializer(serializers.ModelSerializer):
    received = serializers.SerializerMethodField('is_receiver')

    def is_receiver(self, obj):
        try:
            user = self.context['request'].user
            return user != obj.sender
        except KeyError:
            logger.exception('Request not passed to context')
            raise APIException()

    class Meta:
        model = Message
        fields = ('id', 'timestamp', 'content', 'received')


class ChatSerializer(serializers.ModelSerializer):
    app_user = serializers.SerializerMethodField('get_other_user')
    recipient = serializers.CharField(max_length=150, write_only=True)

    def get_other_user(self, obj):
        try:
            if obj.msg_receiver == self.context['request'].user:
                return SignUpSerializer(obj.msg_sender).data
            return SignUpSerializer(obj.msg_receiver).data
        except KeyError:
            logger.exception('Request not passed to context')
            raise APIException()

    def validate_recipient(self, recipient):
        if recipient == self.context['request'].user.email:
            raise ValidationError('Cannot start a chat with yourself')

        try:
            return User.objects.get(email=recipient)
        except User.DoesNotExist:
            raise serializers.ValidationError(f'{recipient} does not exist')
        except Exception as e:
            logger.exception('Recipient validation error')
            raise APIException('Could not validate chat recipient', 500)

    def create(self, validated_data):
        msg_sender = self.context.get('request').user
        msg_receiver = validated_data['recipient']
        return Chat.objects.create(msg_receiver=msg_receiver, msg_sender=msg_sender)

    class Meta:
        model = Chat
        fields = ('id', 'timestamp', 'app_user', 'recipient')
        read_only_fields = ('timestamp', 'app_user')