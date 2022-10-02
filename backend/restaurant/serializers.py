
# import serializers from the REST framework
from rest_framework import serializers
 
# import the todo data model
from .models import Menu
 
# create a serializer class
class  MenuSerializer(serializers.ModelSerializer):
 
    # create a meta class
    class Meta:
        model = Menu
        fields = "__all__"