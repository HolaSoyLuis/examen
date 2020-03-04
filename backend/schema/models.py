from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Profile(models.Model):
	user = models.OneToOneField(User, on_delete = models.CASCADE)
	address = models.CharField(max_length = 75)
	dpi = models.CharField(max_length = 20)
	telephone = models.CharField(max_length = 16)
	created_at = models.DateField(auto_now_add = True)
	updated_at = models.DateField(auto_now = True)

	def __str__(self):
		return self.user

class Location(models.Model):
	place = models.CharField(max_length = 100)
	created_at = models.DateField(auto_now_add = True)
	updated_at = models.DateField(auto_now = True)

	def __str__(self):
		return self.place

class Package(models.Model):
	name = models.CharField(max_length = 50)
	description = models.CharField(max_length = 250)
	state_choices = [
		('bodega', 'bodega'),
		('transito', 'transito'),
		('entregado', 'entregado'),
	]
	state = models.CharField(max_length = 10, choices = state_choices, default = state_choices[0][0])
	client = models.ForeignKey(User, on_delete = models.CASCADE)
	location = models.ForeignKey(Location, on_delete = models.CASCADE)
	created_at = models.DateField(auto_now_add = True)
	updated_at = models.DateField(auto_now = True)

	def __str__(self):
		return '%s %s %s %s' % (self.name, self.state, self.client, self.location)