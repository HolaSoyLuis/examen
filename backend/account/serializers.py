from rest_framework import serializers
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        # fiels = '__all__'
        fields = [
        	'id',
        	'username',
        	'email',
        ]