# Student Affairs Website

## Description
This is a collaboration to complete the group project in the **Web Technology** Course at FCAI-CU.  
Project 2 which is the student affairs website is capable of organizing the students, their grades, GPAs, departments and others.

## Specifications
The user can do the following options:
- Add a new student to the system.
- Edit, update or delete current student data.
- Assign a student to a certain department.
- View all active/inactive students.
- Change the status of student (active/inactive).

## Creating Virtual Environment (Optional)
1- Open your terminal or command prompt.

2- Navigate to the directory where you want to create the virtual environment. You can use the `cd` command to change directories.

3- Enter the following command to create a virtual environment named **projectenv**.  
You can name it anything you like, but **projectenv** is used as an example here.
```sh
python -m venv projectenv && cd projectenv
```
This will create a new directory named **projectenv** in your current directory, which will contain the virtual environment.

4- Activate the virtual environment through: ```Scripts\activate```  
> Note: If it didn't work enter this instead: ```source Scripts\activate```

You should now see (**projectenv**) at the beginning of your command prompt, indicating that the virtual environment is active.

> To deactivate the virtual environment, simply enter the command `deactivate` in the terminal.

## Setting up the Project

1- Clone the repository:
```sh
git clone https://github.com/iSeFz/Student-Affairs.git
```

2- Install packages from the [**requirements.txt**](https://github.com/iSeFz/Student-Affairs/blob/main/requirements.txt) file using the following command:
```sh
cd Student-Affairs && pip install -r requirements.txt
```
This will install all the packages listed in the **requirements.txt** file into your virtual environment.

3- Run the server via the following command:
```sh
python manage.py runserver
```

### That's it! You are now ready to enjoy our website!
