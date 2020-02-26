from rest_framework import serializers
from .models import Location, Package
from django.contrib.auth.models import User

class LocationSerializer(serializers.ModelSerializer):
	class Meta:
		model = Location
		fields = '__all__'

class PackageSerializer(serializers.ModelSerializer):
	class Meta:
		model = Package
		fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
	class Meta:
		model = User
		fields = [
			'username',
			'email',
			'password',
		]