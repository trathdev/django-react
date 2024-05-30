from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from .models import User, PersonalBests
from .serializers import PersonalBestsSerializer, UserSerializer


@api_view(["GET"])
def user_list(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)


@api_view(["GET"])
def personal_bests_for_user(request, username):
    user = get_object_or_404(User, name=username)
    personal_bests = PersonalBests.objects.filter(user=user)
    serializer = PersonalBestsSerializer(personal_bests, many=True)
    return Response(serializer.data)
