from django.shortcuts import render

## users/views.py
from rest_framework import generics
from .serializers import UserSerializer


class CreateUserView(generics.CreateAPIView):
    serializer_class = UserSerializer
