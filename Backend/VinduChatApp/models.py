from django.db import models
from  django.conf import settings
import email
from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.dispatch import receiver
from django.db.models.signals import post_save
from xmlrpc.client import Boolean
import uuid



# Create your models here.
class UserManager(BaseUserManager):
    """Define a model manager for User model with no username field."""

    def _create_user(self, email, password=None, **extra_fields):
        """Create and save a User with the given email and password."""
        if not email:
            raise ValueError('The given email must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_superuser', False)
        return self._create_user(email, password, **extra_fields)

    def create_superuser(self, email, password=None, **extra_fields):
        """Create and save a SuperUser with the given email and password."""
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self._create_user(email, password, **extra_fields)


class User(AbstractUser):
    username = None
    email = models.EmailField(unique=True)
    id = models.UUIDField(default=uuid.uuid4, primary_key=True, unique=True, editable=False)
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = UserManager()


class Profile(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    id = models.UUIDField(default=uuid.uuid4, primary_key=True, unique=True, editable=False)
    display_name = models.CharField(max_length=100, default= None, null=True, blank=True)
    picture = models.ImageField(upload_to='profile_pictures/', null=True, blank=True)
    about = models.TextField(blank=True)
    website = models.URLField(blank=True)  
    
    def __str__(self):
        if self.display_name:
            return self.display_name
        else:
            return str(self.id) 

@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_profile(sender, instance, created, **kwargs):
    if created:
        profile = Profile.objects.create(user=instance)


class Chat(models.Model):
    id = models.UUIDField(default=uuid.uuid4, primary_key=True, unique=True, editable=False)
    timestamp = models.DateTimeField(auto_now_add=True)
    msg_receiver = models.ForeignKey(User, on_delete=models.CASCADE, related_name='msg_receiver')
    msg_sender = models.ForeignKey(User, on_delete=models.CASCADE, related_name='msg_sender')
    
    def __str__(self):
        sender_email = self.msg_sender.email if self.msg_sender.email else str(self.msg_sender)
        receiver_email = self.msg_receiver.email if self.msg_receiver.email else str(self.msg_receiver)      
        return f"Chat between {sender_email} and {receiver_email} "


class Message(models.Model):
    id = models.UUIDField(default=uuid.uuid4, primary_key=True, unique=True, editable=False)
    chat = models.ForeignKey(Chat, on_delete=models.CASCADE, related_name='messages')
    sender = models.ForeignKey(User, on_delete=models.CASCADE,  related_name='sender_atm', null=True)
    timestamp = models.DateTimeField(auto_now_add=True)
    message = models.TextField()
    seen = models.BooleanField(default=False)

    def save(self, *args, **kwargs):
        if not self.sender:
            if self.chat.msg_sender == self.sender:
                self.sender = self.chat.msg_sender
            elif self.chat.msg_receiver == self.sender:
                self.sender = self.chat.msg_receiver
        super().save(*args, **kwargs)

    def __str__(self):
        return f'{self.sender} - {self.chat.id}'
