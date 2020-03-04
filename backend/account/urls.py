from django.urls import path, include
from rest_framework.authtoken import views

from rest_framework import routers
from .viewsets import UserViewSet

from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

user_router = routers.DefaultRouter()
user_router.register('user', UserViewSet)

urlpatterns = [
    path('user/', include(user_router.urls)),
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('login/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]