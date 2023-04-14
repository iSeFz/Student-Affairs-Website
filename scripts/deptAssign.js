// Get students array from local storage
let students = JSON.parse(localStorage.getItem("students"));

// Retrieve the index of student from search page
const urlParams = new URLSearchParams(window.location.search);
const studentIdx = urlParams.get('index');

// Load student data from local storage into page
function displayStudentData(student) {
    document.getElementById('name').value = student.name;
    document.getElementById('id').value = student.id;
    document.getElementById('level').value = student.level;
    document.getElementById('dept').value = student.dept;
}

// Assign department to student
function confirmAssign(){
    students[studentIdx].dept = document.getElementById('dept').value;
    // Update students array in local storage
    localStorage.setItem('students', JSON.stringify(students));
    alert('Department Assigned Successfully');
    event.preventDefault();
    location.href = 'search.html';
}

// Check if student index is specified
if (window.location.href.indexOf("index") > -1) {
    // Check if student is in third level
    if (students[studentIdx].level !== "Third"){
        alert('Cannot assign department to a student not in the third level!');
        location.href = 'search.html';
    }
    // Load student data into page
    displayStudentData(students[studentIdx]);
}
else {
    // Store the html form element
    const deptAssignForm = document.getElementById('deptAssignForm');
    // Create alert box
    let alertBox = document.createElement('h3');
    alertBox.setAttribute('id', 'alertBox');
    alertBox.innerHTML = `
        <h1>No student specified for assigning !!<br><br>
            <a href=\'search.html\'>Select specific student to assign</a>
        </h1>
    `;
    // Replace form with alert box
    deptAssignForm.parentElement.replaceChild(alertBox, deptAssignForm);
}