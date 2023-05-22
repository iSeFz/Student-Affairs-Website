// Retrieve the index of student from search page
const urlParams = new URLSearchParams(window.location.search);
const studentIdx = urlParams.get('index');


// Assign department to student
function confirmAssign(){
    students[studentIdx].dept = document.getElementById('dept').value;
    // Update students array in local storage
    localStorage.setItem('students', JSON.stringify(students));
    alert('Department Assigned Successfully');
    event.preventDefault();
    location.href = 'search.html';
}