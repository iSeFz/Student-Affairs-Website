import os
from django.db import models

# Student Model
class Student(models.Model):
    name = models.CharField(max_length=100, null=True)
    dob = models.DateField(default='2000-01-01')
    phone = models.CharField(max_length=11, null=True)
    email = models.EmailField(null=True)
    gender = models.CharField(max_length=6, choices=[('Male', 'Male'), ('Female', 'Female')], default='Male')
    status = models.CharField(max_length=10, choices=[('Active', 'Active'), ('Inactive', 'Inactive')], default='Active')
    level = models.CharField(max_length=10, choices=[('First', 'First'), ('Second', 'Second'), ('Third', 'Third'), ('Fourth', 'Fourth')],null=True)
    gpa = models.FloatField(null=True)
    dept = models.CharField(max_length=10, choices=[('CS', 'CS'), ('IT', 'IT'), ('IS', 'IS'), ('DS', 'DS'), ('General', 'General'),('AI', 'AI')], default='General')
    studNum = models.CharField(max_length=8, primary_key=True)
