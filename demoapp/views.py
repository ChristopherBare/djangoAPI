from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Counter
from .serializers import CounterSerializer

class CounterDetailView(APIView):
    def get(self, request):
        counter = Counter.objects.first()
        serializer = CounterSerializer(counter)
        return Response(serializer.data)

    def post(self, request):
        counter = Counter.objects.first()
        if request.data['reset']:
            counter.value = 0
        else:
            counter.value += 1
        counter.save()
        serializer = CounterSerializer(counter)
        return Response(serializer.data)

    def delete(self, request):
        counter = Counter.objects.first()
        counter.value -= 1
        counter.save()
        serializer = CounterSerializer(counter)
        return Response(serializer.data)

    def head(self, request):
        counter = Counter.objects.first()
        counter.value = 0
        counter.save()
        serializer = CounterSerializer(counter)
        return Response(serializer.data)
