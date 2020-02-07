from django.contrib import admin
from .models import Profile, Location, State, Package

# Register your models here.
admin.site.register(Profile)
admin.site.register(Location)
admin.site.register(State)
admin.site.register(Package)