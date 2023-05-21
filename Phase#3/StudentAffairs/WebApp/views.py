from django.shortcuts import render
from .models import Student
# Create your views here.
def homePage(request):
    return render(request, 'homePage.html')

def index(request):
    return render(request, 'index.html', {'currentPage': 'index'})

def newStudent(request):
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
    data = Student(name=name, dob=dob, phone=phone, email=email, gender=gender, status=status, studNum=studID, level=level, gpa=gpa, dept=dept)
    if request.method == 'POST':
        data.save()
    return render(request, 'newStudent.html', {'currentPage': 'newStudent'})

def editStudent(request):
    name = request.POST.get('name')
    dob = request.POST.get('dob')
    phone = request.POST.get('phone')
    email = request.POST.get('email')
    gender = request.POST.get('gender')
    status = request.POST.get('status')
    studID = request.POST.get('studID')
    level = request.POST.get('level')
    gpa = request.POST.get('gpa')
    data = Student(name=name, dob=dob, phone=phone, email=email, gender=gender, status=status, studNum=studID, level=level, gpa=gpa)
    if request.method == 'POST':
        data.save()
    return render(request, 'editStudent.html', {'currentPage': 'editStudent'})

def search(request):
    return render(request, 'search.html', {'currentPage': 'search'})

def viewAll(request):
    return render(request, 'viewAll.html', {'currentPage': 'viewAll'})

def deptAssign(request):
    return render(request, 'deptAssign.html', {'currentPage': 'deptAssign'})