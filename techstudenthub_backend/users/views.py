# users/views.py

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Waitlist


class WaitlistView(APIView):
    def post(self, request, *args, **kwargs):
        email = request.data.get('email')

        # Check if the email already exists in the database
        if Waitlist.objects.filter(email=email).exists():
            return Response({"message": "Email is already on the waitlist"}, status=status.HTTP_400_BAD_REQUEST)

        # Save the new email to the waitlist
        waitlist_entry = Waitlist.objects.create(email=email)
        return Response({"message": "Email added to waitlist", "email": waitlist_entry.email},
                        status=status.HTTP_201_CREATED)
