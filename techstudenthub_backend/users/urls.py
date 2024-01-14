from .views import waitlist_signup
from django.urls import path

urlpatterns = [
    # ... your other url patterns ...
    path('waitlist/', waitlist_signup, name='waitlist_signup'),
]
