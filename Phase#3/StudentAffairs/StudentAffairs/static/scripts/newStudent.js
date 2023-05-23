// Check functions for input validation
// Ensure that the phone number is in the correct format
function checkNumber(phoneNumber) {
    const phoneNumberRegex = /^(012|011|015|010)\d{8}$/;
    if (!phoneNumberRegex.test(phoneNumber))
        return "Phone number format incorrect, please enter a phone number starting with 010, 011, 012 or 015.\n";

    if (students.some(student => student.phone === phoneNumber)) {
        return "This phone number is already in use, please enter another number.\n";
    }
    return "";
}
// Ensure that the student ID is in the correct format
function checkID(ID) {
    const IDRegex = /^(20)\d{6}$/;
    if (!IDRegex.test(ID))
        return "Student ID format incorrect, please enter a student ID starting with 20.\n";
    students.forEach(student => {

        if (student['id'] == ID) {
            return "This ID has already been used before...\n";
        }
    })

    if (students.some(student => student.id === ID)) {
        return "This StudentID is already in use, please enter another ID.\n";
    }
    return "";
}
// Ensure that the email is in the correct format
function checkEmail(email) {
    students.forEach(student => {
        if (student['email'] == email) {
            return "This email has already been used before...\n";
        }
    })

    if (students.some(student => student.email === email)) {
        return "This email is already in use, please enter another email.\n";
    }
    return "";
}
// Ensure that the date is in the correct format
function checkDate(date) {
    if (date > 2007 || date < 1993) {
        return "Invalid age, please choose an age 16 between 30."
    }
    return "";
}
// Ensure that the department is in the correct format
function checkDept(dept, level) {
    if (dept !== "General" && (level === "First" || level === "Second")) {
        return "Cannot assign department to a student in first or second level.";
    }
    return "";
}
// Create student when the form is submitted
function createStudent(event) {
    event.preventDefault();
    // Get form values
    let dob = document.getElementById("dob").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let id = document.getElementById("id").value;
    let level = document.getElementById("level").value;
    let dept = document.getElementById("dept").value;

    let errors = checkDate(parseInt(dob.substr(0, 4)));

    if (errors != "") { alert(errors); return; }

    errors = checkNumber(phone);

    if (errors != "") { alert(errors); return; }

    errors = checkEmail(email);

    if (errors != "") { alert(errors); return; }

    errors = checkID(id);

    if (errors != "") { alert(errors); return; }

    errors = checkDept(dept, level);

    if (errors != "") { alert(errors); return; }

    // Display success message
    alert('Student created successfully!');
}