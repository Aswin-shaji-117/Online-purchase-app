from rest_framework import generics
from .models import User
from rest_framework.decorators import api_view
from .serializers import UserSerializer
from rest_framework.response import Response

class UserListCreate(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

@api_view(['GET'])
def hello_world(request):
    print("SSSSSSSSSSSSSSSSSSSSSSSSSSSS")
    return Response({'message': 'Hello, world!'})
# class query(View):
#      queryset = User.objects.all()
     
#      return queryset


