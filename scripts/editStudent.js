// Initialize students array
let students = [];

// get index of student from search
const urlParams = new URLSearchParams(window.location.search);
const studentIdx = urlParams.get('index');

// Confirm the deletion of a student
function confirmDelete() {
    if (confirm('Are you sure you want to delete this student?')) {
        students.splice(studentIdx, 1);
        alert('Student deleted successfully!');
        if (students.length === 0) {
            alert('No current student data found!\nCreate a new student!');
            localStorage.clear();
            location.href = 'newStudent.html';
        } else {
            localStorage.setItem('students', JSON.stringify(students));
            location.href = 'viewAll.html';
        }
    } else {
        event.preventDefault();
    }
}

// Confirm the update of student data
function confirmEdit() {
    updateStudentData(students[studentIdx]);
    alert('Student data updated successfully!');
    event.preventDefault();
}

// Load student data from local storage into page
function displayStudentData(student) {
    document.getElementById('name').value = student.name;
    document.getElementById('dob').value = student.dob;
    document.getElementById('phone').value = student.phone;
    document.getElementById('email').value = student.email;
    document.querySelector('input[name="gender"][value="' + student.gender + '"]').checked = true;
    document.querySelector('input[name="status"][value="' + student.status + '"]').checked = true;
    document.getElementById('id').value = student.id;
    document.getElementById('level').value = student.level;
    document.getElementById('gpa').value = student.gpa;
    document.getElementById('dept').value = student.dept;
}

// Update student data according to edits made
function updateStudentData(student) {
    // Update student information
    student.name = document.getElementById('name').value;
    student.dob = document.getElementById('dob').value;
    student.phone = document.getElementById('phone').value;
    student.email = document.getElementById('email').value;
    student.gender = document.querySelector('input[name="gender"]:checked').value;;
    student.status = document.querySelector('input[name="status"]:checked').value;;
    student.id = document.getElementById('id').value;
    student.level = document.getElementById('level').value;
    student.gpa = document.getElementById('gpa').value;
    // Update student array in local storage
    localStorage.setItem('students', JSON.stringify(students));
}

// Check if students array exists in local storage
if (localStorage.getItem("students")) {
    // Get students array from local storage
    students = JSON.parse(localStorage.getItem("students"));
    displayStudentData(students[studentIdx]);
}
else {
    // If no students array exists in local storage
    alert('No current student data found!\nCreate a new student!');
    localStorage.clear();
    location.href = 'newStudent.html';
}