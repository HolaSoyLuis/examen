from django.urls import path, include
from rest_framework import routers
from .views import LocationViewSet, PackageViewSet

# Location
location_router = routers.DefaultRouter()
location_router.register('location', LocationViewSet)

# Package
package_router = routers.DefaultRouter()
package_router.register('package', PackageViewSet)

# urls
urlpatterns = [
	path('location/', include(location_router.urls)),
	path('package/', include(package_router.urls)),
]