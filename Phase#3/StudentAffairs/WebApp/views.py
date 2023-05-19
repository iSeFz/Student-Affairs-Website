from django.shortcuts import render

# Create your views here.
def homePage(request):
    return render(request, 'homePage.html')

def index(request):
    return render(request, 'index.html', {'currentPage': 'index'})

def newStudent(request):
    return render(request, 'newStudent.html', {'currentPage': 'newStudent'})

def editStudent(request):
    return render(request, 'editStudent.html', {'currentPage': 'editStudent'})

def search(request):
    return render(request, 'search.html', {'currentPage': 'search'})

def viewAll(request):
    return render(request, 'viewAll.html', {'currentPage': 'viewAll'})

def deptAssign(request):
    return render(request, 'deptAssign.html', {'currentPage': 'deptAssign'})