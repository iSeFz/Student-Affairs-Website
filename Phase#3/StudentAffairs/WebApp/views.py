from django.shortcuts import render, redirect
from django.http import JsonResponse
import json
from .models import Student
# Create your views here.

# homepage view

def homePage(request):
    return render(request, 'homePage.html')

# index view

def index(request):
    return render(request, 'index.html', {'currentPage': 'index'})

# newStudent view

def newStudent(request):
    # get values from form
    name = request.POST.get('name')
    dob = request.POST.get('dob')
    phone = request.POST.get('phone')
    email = request.POST.get('email')
    gender = request.POST.get('gender')
    status = request.POST.get('status')
    studID = request.POST.get('studID')
    level = request.POST.get('level')
    gpa = request.POST.get('gpa')
    dept = request.POST.get('dept')
    data = Student(name=name, dob=dob, phone=phone, email=email, gender=gender,
                   status=status, studNum=studID, level=level, gpa=gpa, dept=dept)
    # save data to database
    if request.method == 'POST':
        data.save()
    return render(request, 'newStudent.html', {'currentPage': 'newStudent'})

# editStudent view

def editStudent(request):
    # get values from form
    name = request.POST.get('name')
    dob = request.POST.get('dob')
    phone = request.POST.get('phone')
    email = request.POST.get('email')
    gender = request.POST.get('gender')
    status = request.POST.get('status')
    studID = request.POST.get('studID')
    level = request.POST.get('level')
    gpa = request.POST.get('gpa')
    data = Student(name=name, dob=dob, phone=phone, email=email,
                   gender=gender, status=status, studNum=studID, level=level, gpa=gpa)
    # save data to database
    if request.method == 'POST':
        data.save()
    return render(request, 'editStudent.html', {'currentPage': 'editStudent'})

# deleteStudent button

def deleteStudent(request, id):
    # delete data by student id
    data = Student.objects.get(studNum=id)
    data.delete()
    return render(request, 'viewAll.html', {'currentPage': 'viewAll'})

# search view

def search(request):
    ctx = {
        'currentPage': 'search',
        'students': Student.objects.all()
    }
    return render(request, 'search.html', ctx)

# viewAll view

def viewAll(request):
    ctx = {
        'currentPage': 'viewAll',
        'students': Student.objects.all()
    }
    return render(request, 'viewAll.html', ctx)

# deptAssign view

def deptAssign(request):
    # when click on submit button
    if request.method == 'POST':
        studPreviousData = Student.objects.get(studNum=request.POST.get('id'))
        # edit student data
        name = request.POST.get('name')
        studID = request.POST.get('id')
        level = request.POST.get('level')
        dept = request.POST.get('dept')
        data = Student(
            name=name, dob=studPreviousData.dob, phone=studPreviousData.phone,
            email=studPreviousData.email, gender=studPreviousData.gender,
            status=studPreviousData.status, studNum=studID, level=level, gpa=studPreviousData.gpa,
            dept=dept
        )
        data.save()
        return redirect('/search.html')
    return render(request, 'deptAssign.html', {'currentPage': 'deptAssign'})

# get student data by id

def getStudent(request):
    if request.method == 'POST':
        # get student id from request body
        ID = json.loads(request.body)
        data = Student.objects.get(studNum=ID['studentID'])
        # create dictionary of student data
        studDict = {
            'name': data.name,
            'id': data.studNum,
            'level': data.level,
            'dept': data.dept,
        }
        # return student data as json response
        return JsonResponse(studDict)
    return JsonResponse({'message': 'Invalid request method.'})
