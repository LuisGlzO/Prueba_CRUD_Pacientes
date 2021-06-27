# Generated by Django 3.2.4 on 2021-06-27 17:32

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Paciente',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre_completo', models.CharField(max_length=100)),
                ('edad', models.PositiveIntegerField(max_length=2)),
                ('sexo', models.CharField(max_length=9)),
                ('fecha_de_nacimiento', models.DateField()),
                ('ciudad_de_origen', models.CharField(max_length=30)),
                ('fecha_de_inscripción', models.DateTimeField(auto_now=True)),
                ('hospital_de_origen', models.CharField(max_length=50)),
                ('nombre_del_tutor', models.CharField(max_length=50)),
                ('telefono_del_tutor', models.IntegerField(max_length=10)),
            ],
        ),
    ]
