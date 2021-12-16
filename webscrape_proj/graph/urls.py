from django.urls import path
from .views import index

#Django loads the module and looks for urlpatterns

urlpatterns = [
    path('',index)
]