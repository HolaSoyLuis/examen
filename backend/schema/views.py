from .models import Location, Package
from .serializers import LocationSerializer, PackageSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from django.contrib.auth.models import User
from account.serializers import UserSerializer

# LOCATION ADMIN
@api_view(['GET'])
@permission_classes([IsAuthenticated, IsAdminUser])
def location_list(request):
	locations = Location.objetcs.all()
	serializer = LocationSerializer(locations, many = True)
	return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated, IsAdminUser])
def location_create(request):
	serializer = LocationSerializer(data = request.data)
	if serializer.is_valid():
		serializer.save()
	# return Response(serializer.data)
	return Response({'message': 'success'})

@api_view(['GET'])
@permission_classes([IsAuthenticated, IsAdminUser])
def location_view(request, id):
	try:
		location = Location.objetcs.get(id = id)
	except Location.DoesNotExist:
		return Response(status = status.HTTP_404_NOT_FOUD)
	if request.method == 'GET':
		serializer = LocationSerializer(location, many = False)
		return Response(serializer.data)

@api_view(['PUT'])
@permission_classes([IsAuthenticated, IsAdminUser])
def location_update(request, id):
	try:
		location = Location.objetcs.get(id = id)
	except Location.DoesNotExist:
		return Response(status = status.HTTP_404_NOT_FOUD)
	if request.method == 'PUT':
		serializer = LocationSerializer(instance = location, data = request.data)
		if serializer.is_valid():
			serializer.save()
		# return Response(serializer.data)
		return Response({'message': 'success'})

@api_view(['DELETE'])
@permission_classes([IsAuthenticated, IsAdminUser])
def location_list(request, id):
	try:
		location = Location.objetcs.get(id = id)
	except Location.DoesNotExist:
		return Response(status = status.HTTP_404_NOT_FOUD)
	if request.method == 'DELETE':
		if location.delete():
			return Response({'message': 'success'})
		else:
			return Response({'message': 'failure'})

# PACKAGE USER
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def package_user_list(request, id):
	user = request.user
	try:
		packages = Package.objetcs.get(client = user.id)
	except Package.DoesNotExist:
		return Response(status = status.HTTP_404_NOT_FOUD)
	serializer = PackageSerializer(packages, many = True)
	return Response(serializer.data)

# PACKAGE ADMIN
@api_view(['GET'])
@permission_classes([IsAuthenticated, IsAdminUser])
def package_admin_list(request):
	try:
		packages = Package.objetcs.all()
	except Package.DoesNotExist:
		return Response(status = status.HTTP_404_NOT_FOUD)
	serializer = PackageSerializer(packages, many = True)
	return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated, IsAdminUser])
def user_list(request):
	try:
		users = User.objetcs.all()
	except User.DoesNotExist:
		return Response(status = status.HTTP_404_NOT_FOUD)
	serializer = UserSerializer(users, many = True)
	return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated, IsAdminUser])
def package_admin_create(request):
	if request.method == 'POST':
		package = PackageSerializer(data = request.data)
		if serializer.is_valid():
			serializer.save()
		# return Response(serializer.data)
		return Response({'message': 'success'})

@api_view(['GET'])
@permission_classes([IsAuthenticated, IsAdminUser])
def package_admin_view(request, id):
	try:
		package = Package.objetcs.get(id = id)
	except Package.DoesNotExist:
		return Response(status = status.HTTP_404_NOT_FOUD)
	if request.method == 'GET':
		serializer = PackageSerializer(package, many = False)
		return Respose(serializer.data)

@api_view(['PUT'])
@permission_classes([IsAuthenticated, IsAdminUser])
def package_admin_update(request, id):
	try:
		package = Package.objetcs.get(id = id)
	except Package.DoesNotExist:
		return Response(status = status.HTTP_404_NOT_FOUD)
	if request.method == 'PUT':
		serializer = PackageSerializer(instance = package, data = request.data)
		if serializer.is_valid():
			serializer.save()
		# return Response(serializer.data)
		return Response({'message': 'success'})

@api_view(['DELETE'])
@permission_classes([IsAuthenticated, IsAdminUser])
def package_admin_delete(request, id):
	try:
		package = Package.objetcs.get(id = id)
	except Package.DoesNotExist:
		return Response(status = status.HTTP_404_NOT_FOUD)
	if request.method == 'DELETE':
		if package.delete():
			return Response({'message': 'success'})
		else:
			return Response({'message': 'failure'})