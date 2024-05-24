from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Message
from .serializers import MessageSerializer


class MessageView(APIView):
    def get(self, request):
        message = Message.objects.first()
        serializer = MessageSerializer(message)
        return Response(serializer.data)
