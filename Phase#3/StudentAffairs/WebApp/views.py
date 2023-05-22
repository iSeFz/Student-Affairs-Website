from django.shortcuts import render
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
    data = Student(name=name, dob=dob, phone=phone, email=email, gender=gender, status=status, studNum=studID, level=level, gpa=gpa, dept=dept)
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
    data = Student(name=name, dob=dob, phone=phone, email=email, gender=gender, status=status, studNum=studID, level=level, gpa=gpa)
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

def search(request):
    ctx = {
        'currentPage': 'search',
        'students': Student.objects.all()
    }
    return render(request, 'search.html', ctx)

def viewAll(request):
    ctx = {
        'currentPage': 'viewAll',
        'students': Student.objects.all()
    }
    return render(request, 'viewAll.html', ctx)

def deptAssign(request):
    return render(request, 'deptAssign.html', {'currentPage': 'deptAssign'})
