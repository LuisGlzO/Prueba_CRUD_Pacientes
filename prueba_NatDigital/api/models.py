from django.db import models

# Create your models here.

class Paciente(models.Model):
    nombre_completo = models.CharField(max_length = 100)
    edad = models.PositiveIntegerField()
    sexo = models.CharField(max_length = 9)
    fecha_de_nacimiento = models.DateField()
    ciudad_de_origen = models.CharField(max_length = 30)
    fecha_de_inscripcion = models.DateTimeField(auto_now = True)
    hospital_de_origen = models.CharField(max_length = 50)
    nombre_del_tutor = models.CharField(max_length = 50)
    telefono_del_tutor = models.CharField(max_length = 10)
