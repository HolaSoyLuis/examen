from django.shortcuts import render
from rest_framework import viewsets
from .models import Location, Package
from django.contrib.auth.models import User
from .serializers import LocationSerializer, PackageSerializer, UserSerializer

# Create your views here.
class LocationViewSet(viewsets.ModelViewSet):
	queryset = Location.objects.all()
	serializer_class = LocationSerializer

class PackageViewSet(viewsets.ModelViewSet):
	queryset = Package.objects.all()
	serializer_class = PackageSerializer

class UserViewSet(viewsets.ModelViewSet):
	queryset = User.objects.all()
	serializer_class = UserSerializer