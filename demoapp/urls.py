from django.urls import path
from .views import CounterDetailView

urlpatterns = [
    path('number/', CounterDetailView.as_view(), name='counter-detail'),
]
