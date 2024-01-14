from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from .models import Waitlist
import json


@require_http_methods(["POST"])
def waitlist_signup(request):
    try:
        data = json.loads(request.body)
        email = data['email']
        Waitlist.objects.create(email=email)
        return JsonResponse({'status': 'success', 'message': 'Email added to waitlist'})
    except Exception as e:
        return JsonResponse({'status': 'error', 'message': str(e)}, status=400)
