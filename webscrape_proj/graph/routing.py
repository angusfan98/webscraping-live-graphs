from django.urls import path

from .consumers import GraphConsumer

#calling as_asgi() for routing the consumer
#returns an ASGI wrapper application that will instantiate a new consumer instance for each connection or scope

ws_urlpatterns = [
    path('ws/graph/', GraphConsumer.as_asgi())
]