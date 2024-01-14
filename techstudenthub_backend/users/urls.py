# users/urls.py

from django.urls import path
from .views import WaitlistView

urlpatterns = [
    # ... other url patterns
    path('waitlist/', WaitlistView.as_view(), name='waitlist'),
]
