// Retrieve the index of student from search page
const queryParams = new URLSearchParams(window.location.search);

// Confirm the deletion of a student
function confirmDelete(event) {
    id = document.getElementById("id").value;
    if (confirm('Are you sure you want to delete this student?')) {
        window.location.href = `/deleteStudent/${id}`;
        alert('Student deleted successfully!');
    } else {
        event.preventDefault();
    }
}

// Load the data of the student to be edited
function loadData() {
    document.getElementById('name').value = queryParams.get('name');
    document.getElementById('dob').value = queryParams.get('dob');
    document.getElementById('phone').value = queryParams.get('phone');
    document.getElementById('email').value = queryParams.get('email');
    document.getElementById('id').value = queryParams.get('id');
    document.getElementById('level').value = queryParams.get('level');
    document.getElementById('gpa').value = queryParams.get('gpa');
    document.getElementById('dept').value = queryParams.get('dept');
}

loadData();

// Check if there is a student selected for editing
document.addEventListener('DOMContentLoaded', function() {
    var url = new URL(window.location.href);
    var path = url.pathname;

    if (path === '/editStudent.html/' && url.search === '') {
        alert('Please choose a specific student to edit!');
        window.location.href = '/search.html';
    }
});

// Display error messages for invalid inputs
function errorMessageAdd(err, message) {
    document.getElementById(err).textContent = message;
    document.getElementById(err).style.color = "red";
    document.getElementById(err).style.margin = "-25px 40px 5px";
    return false;
}

// Remove error messages for valid inputs
function errorMessageRemove(err) {
    document.getElementById(err).textContent = "";
    document.getElementById(err).style.color = "black";
    document.getElementById(err).style.margin = "0px";
    return true;
}

let phoneValid = false, emailValid = false, gpaValid = false;

// Check the validity of the student's phone number
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

// Check the validity of the student's email
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

// Check the validity of the student's GPA
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

// Event lisnters for the inputs for instant validation
document.getElementById('phone').addEventListener('input', function() { checkNumber(this.value); })
document.getElementById('email').addEventListener('input', function() { checkEmail(this.value); })
document.getElementById('gpa').addEventListener('input', function() { checkGPA(this.value); })

// Confirmation message that the student edit was successfull
document.getElementById('submit').addEventListener('click', function(e) {
    if(phoneValid && emailValid && gpaValid){
        alert('Student Updated Successfully!');
        window.location.href = '/search.html';
    }
    else{
        e.preventDefault();
        alert('Please check that all fields have the correct data format!');
    }
});
