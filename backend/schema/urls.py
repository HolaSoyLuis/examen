from django.urls import path, include
from rest_framework import routers
from . import views

urlpatterns = [
	# location
	path('location-list/', views.location_list, name='location-list'),
	path('location-create/', views.location_list, name='location-create'),
	path('location-view/<str:id>/', views.location_list, name='location-view'),
	path('location-update/<str:id>/', views.location_list, name='location-update'),
	path('location-delete/<str:id>/', views.location_list, name='location-delete'),

	# packages
	path('package-user-list/', views.package_user_list, name='package-user-list'),

	path('package-admin-list/', views.package_admin_list, name='package-admin-list'),
	path('package-admin-create/', views.package_admin_create, name='package-admin-create'),
	path('package-admin-view/<str:id>/', views.package_admin_view, name='package-admin-view'),
	path('package-admin-update/<str:id>/', views.package_admin_update, name='package-admin-update'),
	path('package-admin-delete/<str:id>/', views.package_admin_delete, name='package-admin-delete'),
]