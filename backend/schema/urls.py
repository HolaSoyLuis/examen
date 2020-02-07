from django.urls import path, include
from rest_framework import routers
from .views import LocationViewSet, StateViewSet, PackageViewSet

# Location
location_router = routers.DefaultRouter()
location_router.register('location', LocationViewSet)

# State
state_router = routers.DefaultRouter()
state_router.register('state', StateViewSet)

# Package
package_router = routers.DefaultRouter()
package_router.register('package', PackageViewSet)

# urls
urlpatterns = [
	path('location/', include(location_router.urls)),
	path('state/', include(state_router.urls)),
	path('package/', include(package_router.urls)),
]