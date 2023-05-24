function errorMessageAdd(err, message) {
    document.getElementById(err).textContent = message;
    document.getElementById(err).style.color = "red";
    return false;
}

function errorMessageRemove(err) {
    document.getElementById(err).textContent = "";
    return true;
}

let idValid = false, phoneValid = false, emailValid = false, gpaValid = false;

function checkID(ID) {
    if(ID == '')
        return;
    const IDRegex = /^(20)\d{6}$/;
    myRequest = new XMLHttpRequest();
    myRequest.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            if(JSON.parse(this.responseText)['message'] == 'true'){
                document.getElementById('id').style.border = '1px solid red';
                idValid = errorMessageAdd('idError', 'This ID already exists');
            }
            else{
                if(!IDRegex.test(ID)){
                    document.getElementById('id').style.border = '1px solid red';
                    idValid = errorMessageAdd('idError', 'Please enter a valid ID');
                }
                else{
                    document.getElementById('id').style.border = '1px solid #68797B';
                    idValid = errorMessageRemove('idError');
                }
            }
        }
    }
    myRequest.open("GET", "/checkID/" + ID, true);
    myRequest.send();
}

function checkNumber(phoneNumber) {
    const phoneNumberRegex = /^(012|011|015|010)\d{8}$/;
    if (!phoneNumberRegex.test(phoneNumber)){
        document.getElementById('phone').style.border = '1px solid red';
        phoneValid = errorMessageAdd('phoneError', 'Please enter a valid phone number');
    }
    else{
        document.getElementById('phone').style.border = '1px solid #68797B';
        phoneValid = errorMessageRemove('phoneError');
    }
}

function checkEmail(email){
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    myRequest = new XMLHttpRequest();
    myRequest.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            if(JSON.parse(this.responseText)['message'] == 'true'){
                document.getElementById('email').style.border = '1px solid red';
                emailValid = errorMessageAdd('emailError', 'This email already exists');
            }
            else{
                if(!emailRegex.test(email)){
                    document.getElementById('email').style.border = '1px solid red';
                    emailValid = errorMessageAdd('emailError', 'Please enter a valid email');
                }
                else{
                    document.getElementById('email').style.border = '1px solid #68797B';
                    emailValid = errorMessageRemove('emailError');
                }
            }
        }
    }
    myRequest.open("GET", "/checkEmail/" + email, true);
    myRequest.send();
}

function checkDept(level){
    deptMenu = document.getElementById('dept');
    if(level == 'First' || level == 'Second'){
        deptMenu.options[0].selected = true;
        deptMenu.disabled = true;
        deptMenu.style.cursor = 'not-allowed';
    }
    else{
        deptMenu.disabled = false;
        deptMenu.style.cursor = 'default';
    }
}

function checkGPA(gpa){
    if(gpa < 1 || gpa > 4){
        document.getElementById('gpa').style.border = '1px solid red';
        gpaValid = errorMessageAdd('gpaError', 'Please enter a valid GPA between 1 and 4');
    }
    else{
        document.getElementById('gpa').style.border = '1px solid #68797B';
        gpaValid = errorMessageRemove('gpaError');
    }
}

document.getElementById('id').addEventListener('input', function () {
    checkID(this.value);
});

document.getElementById('phone').addEventListener('input', function () {
    checkNumber(this.value);
})

document.getElementById('email').addEventListener('input', function () {
    checkEmail(this.value);
})

document.getElementById('level').addEventListener('input', function () {
    checkDept(this.value);
})

document.getElementById('gpa').addEventListener('input', function () {
    checkGPA(this.value);
})

const submit = document.getElementById('submit');

submit.addEventListener('click',function(e){
    if(idValid && phoneValid && emailValid && gpaValid){
        alert('Student added successfully');
    }
    else{
        e.preventDefault();
        alert('Please check all the fields are filled correctly');
    }
})