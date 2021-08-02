from django.urls import path
from .views import (UserView,
                    BookLocationView,
                    BookCategoryView,
                    BookView,
                    BookDetailView,
                    BookUpdateView,
                    BookCategoryDetailView,
                    BookCategoryCreateView,
                    BookCategoryUpdateView,
                    BookCategoryDeleteView,
                    )

urlpatterns = [
    path('users', UserView.as_view()),
    path('books', BookView.as_view()),
    path('books/<pk>', BookDetailView.as_view()),
    path('books/<pk>/update', BookUpdateView.as_view()),
    path('book-location', BookLocationView.as_view()),
    path('book-category', BookCategoryView.as_view()),
    path('book-category-create', BookCategoryCreateView.as_view()),
    path('book-category/<pk>', BookCategoryDetailView.as_view()),
    path('book-category/<pk>/update', BookCategoryUpdateView.as_view()),
    path('book-category/<pk>/delete', BookCategoryDeleteView.as_view()),
]
