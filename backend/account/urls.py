from django.urls import path, include
from rest_framework.authtoken import views

from rest_framework import routers
from .viewsets import UserViewSet

user_router = routers.DefaultRouter()
user_router.register('user', UserViewSet)

urlpatterns = [
    path('auth/', include(user_router.urls)),
    path('authtoken/', views.obtain_auth_token, name = 'authtoken')
]