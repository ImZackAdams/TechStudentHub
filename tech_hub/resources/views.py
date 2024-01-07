from django.shortcuts import render

# Create your views here.

from django.http import JsonResponse
from .models import Book

from django.http import HttpResponse


def home(request):
    return HttpResponse("Welcome to the Tech Student Hub!")


def book_list(request):
    books = Book.objects.all().values()  # get all books from the database
    books_list = list(books)  # convert to a list
    return JsonResponse(books_list, safe=False)
