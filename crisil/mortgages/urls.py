from django.urls import path
from .views import mortgage_list_create, mortgage_detail

urlpatterns = [
    path('mortgages/', mortgage_list_create, name='mortgage-list-create'),
    path('mortgages/<int:pk>/', mortgage_detail, name='mortgage-detail'),
]