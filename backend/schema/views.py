from django.shortcuts import render
from rest_framework import viewsets
from .models import Location, Package
from .serializers import LocationSerializer, PackageSerializer

# Create your views here.
class LocationViewSet(viewsets.ModelViewSet):
	queryset = Location.objects.all()
	serializer_class = LocationSerializer

class PackageViewSet(viewsets.ModelViewSet):
	queryset = Package.objects.all()
	serializer_class = PackageSerializer