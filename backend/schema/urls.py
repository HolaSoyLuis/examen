from django.urls import path, include
from rest_framework import routers
from .views import LocationViewSet, PackageViewSet, UserViewSet

# Location
location_router = routers.DefaultRouter()
location_router.register('location', LocationViewSet)

# Package
package_router = routers.DefaultRouter()
package_router.register('package', PackageViewSet)

# User
user_router = routers.DefaultRouter()
user_router.register('user', UserViewSet)

# urls
urlpatterns = [
	path('location/', include(location_router.urls)),
	path('package/', include(package_router.urls)),
	path('user/', include(user_router.urls)),
]