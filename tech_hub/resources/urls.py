from django.urls import path
from .views import book_list  # Import the book_list view

urlpatterns = [
    path('books/', book_list, name='book_list'),  # Map /books/ to the book_list view
]
