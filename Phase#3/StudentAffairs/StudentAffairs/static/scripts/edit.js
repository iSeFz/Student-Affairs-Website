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

// Prevent the user from editing the department field
document.getElementById('dept').addEventListener('mousedown',
    function (e) { e.preventDefault(); }, false);


document.addEventListener('DOMContentLoaded', function() {
    var url = new URL(window.location.href);
    var path = url.pathname;

    if (path === '/editStudent.html/' && url.search === '') {
        alert('Please choose a specific student to edit!');
        window.location.href = '/search.html';
    }
});