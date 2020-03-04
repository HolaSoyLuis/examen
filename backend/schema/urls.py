from django.urls import path, include
from rest_framework import routers
from . import views

urlpatterns = [
	# location
	path('location-list/', views.location_list, name='location-list'),
	path('location-create/', views.location_create, name='location-create'),
	path('location-view/<str:id>/', views.location_view, name='location-view'),
	path('location-update/<str:id>/', views.location_update, name='location-update'),
	path('location-delete/<str:id>/', views.location_delete, name='location-delete'),

	# user
	path('user-list/', views.user_list, name='user-list'),
	# packages
	path('package-user-list/<str:id>/', views.package_user_list, name='package-user-list'),

	path('package-admin-list/', views.package_admin_list, name='package-admin-list'),
	path('package-admin-create/', views.package_admin_create, name='package-admin-create'),
	path('package-admin-view/<str:id>/', views.package_admin_view, name='package-admin-view'),
	path('package-admin-update/<str:id>/', views.package_admin_update, name='package-admin-update'),
	path('package-admin-delete/<str:id>/', views.package_admin_delete, name='package-admin-delete'),

	# test
	
	# path('hello-user/', views.hello_user, name = 'hello-user'),
	# path('hello-admin/', views.hello_admin, name = 'hello-admin'),

]