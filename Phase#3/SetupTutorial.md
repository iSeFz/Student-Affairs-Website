## Creating a Virtual Environment and Installing Packages from Requirements.txt 
1- Open your terminal or command prompt.

2- Navigate to the directory where you want to create the virtual environment. You can use the cd command to change directories.

3- Enter the following command to create a virtual environment named projectenv:
```sh
python -m venv projectenv && cd projectenv
```
This will create a new directory named projectenv in your current directory, which will contain the virtual environment.

4- Clone our Repo in venv:
```sh
git clone https://github.com/iSeFz/Web-Project.git
```

5- Activate the virtual environment by entering the following command:
```sh
Scripts\activate
```
> Note: If it does not work enter this command:
```sh
source Scripts\activate
```
You should now see (projectenv) at the beginning of your command prompt, indicating that the virtual environment is active.

6- Install packages from a requirements.txt file using the following command:
```sh
pip install --upgrade pip && pip install -r Web-Project\Phase#3\requirements.txt
```
This will install all the packages listed in the requirements.txt file into your virtual environment.

7- Try to run the server via the following command:
```sh
cd Web-Project\Phase#3\StudentAffairs && python manage.py runserver
```

8- That's it! You now have a virtual environment with the required packages installed. To deactivate the virtual environment, simply enter the command deactivate in the terminal.
