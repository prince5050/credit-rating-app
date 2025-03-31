from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Mortgage
from .serializers import MortgageSerializer


# Create your views here.

# GET all mortgages / POST a new mortgage
@api_view(['GET', 'POST'])
def mortgage_list_create(request):
    if request.method == 'GET':
        mortgages = Mortgage.objects.all()
        serializer = MortgageSerializer(mortgages, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    elif request.method == 'POST':
        serializer = MortgageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# GET single mortgage / UPDATE / DELETE
@api_view(['GET', 'PUT', 'DELETE'])
def mortgage_detail(request, pk):
    try:
        mortgage = Mortgage.objects.get(pk=pk)
    except Mortgage.DoesNotExist:
        return Response({"error": "Mortgage not found"}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = MortgageSerializer(mortgage)
        return Response(serializer.data, status=status.HTTP_200_OK)

    elif request.method == 'PUT':
        serializer = MortgageSerializer(mortgage, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        mortgage.delete()
        return Response({"message": "Mortgage deleted successfully"}, status=status.HTTP_204_NO_CONTENT)
