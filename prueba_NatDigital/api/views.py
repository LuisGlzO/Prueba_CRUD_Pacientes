from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .serializers import PacienteSerializer
from .models import Paciente
from rest_framework.pagination import PageNumberPagination

# Create your views here.
class PacienteAPI(APIView):
    #def get(self, request, format=None):
     #   pacientes = Paciente.objects.all()
      #  serializer = PacienteSerializer(pacientes, many = True)
       # return Response(serializer.data)

    pagination_class = PageNumberPagination

    def get(self, request, format=None):
        paciente = Paciente.objects.all()
        paginator = PageNumberPagination()
        result_page = paginator.paginate_queryset(paciente, request)
        serializer = PacienteSerializer(result_page, many = True)
        print(serializer)
        return Response(serializer.data)


    def post(self,request):
        serializer = PacienteSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            return Response(serializer.data, status = status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)

class PacienteDetail(APIView):

    def get(self, request, paciente_id):
        paciente = Paciente.objects.get(id=paciente_id)
        serializer = PacienteSerializer(paciente)
        return Response(serializer.data)
   
    def put(self, request, paciente_id):
        print(paciente_id)
        paciente = Paciente.objects.get(id=paciente_id)
        print(paciente)
        print(request.data)
        serializer = PacienteSerializer(paciente, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, paciente_id):
        paciente = Paciente.objects.get(id=paciente_id)
        paciente.delete()
        return Response({"message" :" Paciente eliminado"}, status=status.HTTP_200_OK)


