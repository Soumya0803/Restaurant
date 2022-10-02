from unicodedata import category
from django.db import models

# Create your models here.

class Menu(models.Model):
    name=models.CharField(max_length=150)
    description=models.CharField(max_length=500)
    price=models.CharField(max_length=50)
    image = models.ImageField(upload_to='static', null=True)
    category=models.CharField(max_length=150,null=True)
    inventory_id=models.ForeignKey(model=Product_inventory)
class Product_inventory(models.Model):
    inventory_id=models.IntegerField(model=Menu)

    quantity=models.IntegerField()
    created=models.DateTimeField()
    modified=models.DateTimeField()
    deleted=models.DateTimeField()
