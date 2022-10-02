from django.shortcuts import render
 
# import view sets from the REST framework
from rest_framework import viewsets
 
# import the TodoSerializer from the serializer file
from .serializers import MenuSerializer
 
# import the Todo model from the models file
from .models import Menu
 
# create a class for the Todo model viewsets
class MenuView(viewsets.ModelViewSet):
 
    # create a serializer class and
    # assign it to the TodoSerializer class
    serializer_class = MenuSerializer
    # define a variable and populate it
    # with the Todo list objects
    queryset = Menu.objects.all()