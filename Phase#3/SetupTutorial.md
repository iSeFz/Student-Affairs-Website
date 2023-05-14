## Creating a Virtual Environment and Installing Packages from Requirements.txt 
1- Open your terminal or command prompt.

2- Navigate to the directory where you want to create the virtual environment. You can use the cd command to change directories.

3- Enter the following command to create a virtual environment named projectenv: ```python -m venv projectenv```
This will create a new directory named projectenv in your current directory, which will contain the virtual environment.

4- Activate the virtual environment by entering the following command:```source projectenv\Scripts\activate```
You should now see (projectenv) at the beginning of your command prompt, indicating that the virtual environment is active.

5- Install packages from a requirements.txt file using the following command:```pip install -r requirements.txt```
This will install all the packages listed in the requirements.txt file into your virtual environment.

6- That's it! You now have a virtual environment with the required packages installed. To deactivate the virtual environment, simply enter the command deactivate in the terminal.

7- Clone our Repo in venv: ```git clone https://github.com/iSeFz/Web-Project.git```