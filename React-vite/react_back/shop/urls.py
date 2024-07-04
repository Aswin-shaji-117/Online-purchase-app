from django.contrib import admin
from django.urls import path
from .views import UserListCreate,hello_world


urlpatterns = [
    path('api/users/', UserListCreate.as_view(), name='user-list-create'),
    path('api/gethello/', hello_world, name='user-get'),
]
