from django.shortcuts import render
from rest_framework import generics
from .serializers import BookLocationSerializer, BookCategorySerializer, BookSerializer
from .models import BookLocation, Book, BookCategory
from django.contrib.auth.models import User
from api.serializers import UserSerializer
# Create your views here.


class UserView(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class BookLocationView(generics.ListAPIView):
    queryset = BookLocation.objects.all()
    serializer_class = BookLocationSerializer


class BookCategoryView(generics.ListAPIView):
    queryset = BookCategory.objects.all()
    serializer_class = BookCategorySerializer


class BookCategoryCreateView(generics.CreateAPIView):
    queryset = BookCategory.objects.all()
    serializer_class = BookCategorySerializer


class BookCategoryDetailView(generics.RetrieveAPIView):
    queryset = BookCategory.objects.all()
    serializer_class = BookCategorySerializer


class BookCategoryUpdateView(generics.UpdateAPIView):
    queryset = BookCategory.objects.all()
    serializer_class = BookCategorySerializer


class BookCategoryDeleteView(generics.DestroyAPIView):
    queryset = BookCategory.objects.all()
    serializer_class = BookCategorySerializer


class BookView(generics.ListAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer


class BookDetailView(generics.RetrieveAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer


class BookUpdateView(generics.UpdateAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
