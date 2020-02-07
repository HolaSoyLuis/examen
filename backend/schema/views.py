from django.shortcuts import render
from rest_framework import viewsets
from .models import Location, State, Package
from .serializers import LocationSerializer, StateSerializer, PackageSerializer

# Create your views here.
class LocationViewSet(viewsets.ModelViewSet):
	queryset = Location.objects.all()
	serializer_class = LocationSerializer

class StateViewSet(viewsets.ModelViewSet):
	queryset = State.objects.all()
	serializer_class = StateSerializer

class PackageViewSet(viewsets.ModelViewSet):
	queryset = Package.objects.all()
	serializer_class = PackageSerializer