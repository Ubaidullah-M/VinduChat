from django_filters import rest_framework as filters
from .models import Message, Chat

class ChatFilter(filters.FilterSet):
    name = filters.CharFilter(lookup_expr='icontains', field_name='first_name')

    class Meta:
        model = Chat
        fields = ['name']

class MessageFilter(filters.FilterSet):
    content = filters.CharFilter(lookup_expr='icontains', field_name='content')
    chat__msg_sender = filters.CharFilter(lookup_expr='exact', field_name='chat__msg_sender')
    chat__msg_receiver = filters.CharFilter(lookup_expr='exact', field_name='chat__msg_receiver')

    class Meta:
        model = Message
        fields = ['content', 'chat__msg_sender', 'chat__msg_receiver']