from django.urls import path
from . import views

urlpatterns = [
    path('', views.homePage, name='homePage'),
    path('index.html', views.index, name='index'),
    path('newStudent.html', views.newStudent, name='newStudent'),
    path('editStudent.html', views.editStudent, name='editStudent'),
    path('search.html', views.search, name='search'),
    path('viewAll.html', views.viewAll, name='viewAll'),
    path('deptAssign.html', views.deptAssign, name='deptAssign'),
    path('deptAssign.html/', views.deptAssign, name='deptAssign'),
    path('editStudent.html/', views.editStudent, name='editStudent'),
    path('deleteStudent/<id>', views.deleteStudent, name='deleteStudent'),
    path('getStudent', views.getStudent, name='sendStudent'),
]
