from rest_framework import serializers
from .models import Location, Package

class LocationSerializer(serializers.ModelSerializer):
	class Meta:
		model = Location
		fields = '__all__'

class PackageSerializer(serializers.ModelSerializer):
	class Meta:
		model = Package
		fields = '__all__'