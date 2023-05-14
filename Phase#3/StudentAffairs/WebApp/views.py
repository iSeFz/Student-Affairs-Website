from django.shortcuts import render

# Create your views here.
def homePage(request):
    return render(request, 'homePage.html')

def index(request):
    return render(request, 'index.html')

def newStudent(request):
    return render(request, 'newStudent.html')

def editStudent(request):
    return render(request, 'editStudent.html')

def search(request):
    return render(request, 'search.html')

def viewAll(request):
    return render(request, 'viewAll.html')

def deptAssign(request):
    return render(request, 'deptAssign.html')