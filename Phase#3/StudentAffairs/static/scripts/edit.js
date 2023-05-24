// Retrieve the index of student from search page
const queryParams = new URLSearchParams(window.location.search);

// Confirm the deletion of a student
function confirmDelete() {
    id = document.getElementById("id").value;
    if (confirm('Are you sure you want to delete this student?')) {
        window.location.href = `/deleteStudent/${id}`;
        alert('Student deleted successfully!');
    } else {
        event.preventDefault();
    }
}

// // Confirm the update of student data
// function confirmEdit() {
//     updateStudentData(students[studentIdx]);
//     alert('Student data updated successfully!');
//     event.preventDefault();
//     location.href = 'viewAll.html';
// }

// Load student data from local storage into page
// function displayStudentData(student) {
//     document.getElementById('name').value = student.name;
//     document.getElementById('dob').value = student.dob;
//     document.getElementById('phone').value = student.phone;
//     document.getElementById('email').value = student.email;
//     document.querySelector('input[name="gender"][value="' + student.gender + '"]').checked = true;
//     document.querySelector('input[name="status"][value="' + student.status + '"]').checked = true;
//     document.getElementById('id').value = student.id;
//     document.getElementById('level').value = student.level;
//     document.getElementById('gpa').value = student.gpa;
//     document.getElementById('dept').value = student.dept;
// }

// // Update student data according to edits made
// function updateStudentData(student) {
//     // Update student information
//     student.name = document.getElementById('name').value;
//     student.dob = document.getElementById('dob').value;
//     student.phone = document.getElementById('phone').value;
//     student.email = document.getElementById('email').value;
//     student.gender = document.querySelector('input[name="gender"]:checked').value;;
//     student.status = document.querySelector('input[name="status"]:checked').value;;
//     student.id = document.getElementById('id').value;
//     student.level = document.getElementById('level').value;
//     student.gpa = document.getElementById('gpa').value;
//     // Update student array in local storage
//     localStorage.setItem('students', JSON.stringify(students));
// }

function loadData(){
    document.getElementById('name').value = queryParams.get('name');
    document.getElementById('dob').value = queryParams.get('dob');
    document.getElementById('phone').value = queryParams.get('phone');
    document.getElementById('email').value = queryParams.get('email');
    document.getElementById('id').value = queryParams.get('id');
    document.getElementById('level').value = queryParams.get('level');
    document.getElementById('gpa').value = queryParams.get('gpa');
    document.getElementById('dept').value =  queryParams.get('dept');
}

loadData();

document.getElementById('dept').addEventListener('mousedown', function(e) {
    e.preventDefault();
}, false);

document.addEventListener('DOMContentLoaded', function() {
    var url = new URL(window.location.href);
    var path = url.pathname;

    if (path === '/editStudent.html/' && url.search === '') {
        
        alert('Please Select a student to edit from search table!');
        window.location.href = '/search.html';
    }
});