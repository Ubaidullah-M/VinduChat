from django.urls import path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView,
)
from .tokens import JWTCreateView, JWTRefreshView, JWTVerifyView
from VinduChatApp.views import SignUpView, LogInView, SearchUserView
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

schema_view = get_schema_view(
   openapi.Info(
      title="VinduChat API",
      default_version='v1',
      description="Description of app",
      license=openapi.License(
         name="MIT License",
         url="https://github.com/Ubaidullah-M/VinduChatApp/blob/main/LICENSE",
      ),
   ),
   public=True,
   permission_classes=(permissions.AllowAny,),
)


urlpatterns = [
    path("signup/", SignUpView.as_view(), name="signup"),
    path("login/", LogInView.as_view(), name="login"),
    path("search/", SearchUserView.as_view(), name="search"),
    path("jwt/create/", JWTCreateView.as_view(), name="jwt_create"),
    path("jwt/refresh/", JWTRefreshView.as_view(), name="token_refresh"),
    path("jwt/verify/", JWTVerifyView.as_view(), name="token_verify"),
    path('swagger<format>/', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
]