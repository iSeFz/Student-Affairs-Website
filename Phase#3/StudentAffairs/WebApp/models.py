import os
from django.db import models
from django.db.backends import sqlite3


class Student:
    def __init__(self, ID, Name, Age, Gender, Address, Email, password, GPA, department, level):
        self.ID = ID
        self.Name = Name
        self.Age = Age
        self.Gender = Gender
        self.Address = Address
        self.Email = Email
        self.password = password
        self.GPA = GPA
        self.department = department
        self.level = level
class StudentDB:
    def __init__(self):
        self.students = []
        try:
            self.c = sqlite3.connect(".\db.sqlite3")
        except Exception as e:
            f = ".\db.sqlite3"
            if not os.path.exists(f):
                print("Couldn't create dataBase")
                print(e.args[0])
            else:
                print(e.args[0])
        try:
            st = self.c.cursor()
            st.execute(
                "CREATE TABLE IF NOT EXISTS STUDENTS(ID integer primary key, name string,Password String, age INTEGER, gender String, address String, email String, GPA float, department String, level String)")
        except Exception as e:
            print("Couldn't create table")
            print(e.args[0])
        try:
            SQL = "SELECT ID, name, Password, age, gender, address, email, GPA, department, level  from STUDENTS"
            st = self.c.cursor()
            rs = st.execute(SQL)
            for row in rs:
                stud = Student(row[0], row[1], row[3], row[4], row[5], row[6], row[7], row[8], row[9], row[10])
                self.students.append(stud)
        except Exception as e:
            print(e.args[0])

    def refreshStudents(self):
        self.students.clear()
        try:
            SQL = "SELECT ID, name, Password, age, gender, address, email, GPA, department, level  from STUDENTS"
            st = self.c.cursor()
            rs = st.execute(SQL)
            for row in rs:
                stud = Student(row[0], row[1], row[3], row[4], row[5], row[6], row[7], row[8], row[9], row[10])
                self.students.append(stud)
        except Exception as e:
            print(e.args[0])

    def addNewStudent(self, ID, Name, Age, Gender, Address, Email, password, GPA, department, level):
                stud= Student(ID, Name, Age, Gender, Address, Email, password, GPA, department, level)
                flag = True
                if self.students:
                    for student in self.stuents:
                        if stud.ID == student.ID:
                            flag = False
                            break
                if flag:
                    try:
                        self.students.append(stud)
                        SQL = "INSERT INTO STUDENTS (ID, name, Password, age, gender, address, email, GPA, department,level) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
                        stt = self.c.cursor()
                        stt.execute(SQL, (ID, Name, password, Age, Gender, Address, Email, GPA, department, level))
                        self.c.commit()
                    except Exception as e:
                        print("Didn't work lmao")
                        print(e.args[0])
                else:
                    print("Can't add a Student since you have a student with the same ID")

    def DisplayStudents(self):
        if not self.students:
            print("There are no students in the system")
            return
        print("{:<20s}{:<20s}{:<20s}{:<20s}{:<20s}{:<20s}{:<20s}".format("ID", "Name", "Age", "Gender", "Address",
                                                                         "Email", "GPA", "Department", "Level"))
        for student in self.students:
            print("{:<20d}{:<20s}{:<20d}{:<20s}{:<20s}{:<20s}{:<20d}".format(student.ID, student.Name, student.Age,
                                                                             student.Gender, student.Address,
                                                                             student.Email, student.GPA, student.department, student.level))




# Create your models here.
