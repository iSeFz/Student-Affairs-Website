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
    // Add student object to students array
    students.push(student);
    // Save students array to local storage
    localStorage.setItem("students", JSON.stringify(students));
    // Display success message
    alert('Student created successfully!');
    window.location.href = 'viewAll.html';
}