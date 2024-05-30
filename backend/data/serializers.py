from rest_framework import serializers
from .models import PersonalBests, User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["name"]


class PersonalBestsSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonalBests
        fields = "__all__"
