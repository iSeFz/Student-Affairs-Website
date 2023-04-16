// Array of student objects
let students = [];
// Student object attributes
let student = {
    name: "",
    dob: "",
    phone: "",
    email: "",
    gender: "",
    status: "",
    id: "",
    level: "",
    gpa: "",
    dept: ""
};

// Check if students array exists in local storage
if (localStorage.getItem("students")) {
    // Get students array from local storage
    students = JSON.parse(localStorage.getItem("students"));
}

function checkNumber(phoneNumber) {

    if(phoneNumber[0] != '0') 
        return "Phone number format incorrect, please enter a phone number starting with 010, 011, 012, 015, or 02.";
    
    
    if(phoneNumber[1] != '2' && (phoneNumber[1] != '1' || 
        (phoneNumber[2] != '0' && phoneNumber[2] != '1' &&
            phoneNumber[2] != '2' && phoneNumber[2] != '5'))) 
                return "Phone number format incorrect, please enter a phone number starting with 010, 011, 012, 015, or 02.";

    if(students.some(student => student.phone === phoneNumber)){
        return "This phone number is already in use, please enter another number.\n";
    }

    return "";

}

function checkID(ID) {
    students.forEach(student =>{

        if(student['id'] == ID){
            return "This ID has already been used before...";
        }

    })

    if(students.some(student => student.id === ID)){
        return "This StudentID is already in use, please enter another ID.\n";
    }


    return "";

}

function checkEmail(email) {
    students.forEach(student =>{

        if(student['email'] == email){
            return "This email has already been used before...";
        }

    })

    if(students.some(student => student.email === email)){
        return "This email is already in use, please enter another email.\n";
    }

    return "";

}

// Create student when the form is submitted
function createStudent() {
    event.preventDefault();
    // Get form values
    let name = document.getElementById("name").value;
    let dob = document.getElementById("dob").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let gender = document.querySelector("input[name=gender]:checked").value;
    let status = document.querySelector("input[name=status]:checked").value;
    let id = document.getElementById("id").value;
    let level = document.getElementById("level").value;
    let gpa = document.getElementById("gpa").value;
    let dept = document.getElementById("dept").value;
    // Create student object
    let student = {
        name: name,
        dob: dob,
        phone: phone,
        email: email,
        gender: gender,
        status: status,
        id: id,
        level: level,
        gpa: gpa,
        dept: dept
    };

    let errors = "";
    errors += checkNumber(phone);
    errors += checkEmail(email);
    errors += checkID(id);

    if(errors != "") {
        alert(errors);
        return;
    }

    // Add student object to students array
    students.push(student);
    // Save students array to local storage
    localStorage.setItem("students", JSON.stringify(students));
    // Display success message
    alert('Student created successfully!');
    window.location.href = 'viewAll.html';
}