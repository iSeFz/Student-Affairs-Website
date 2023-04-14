// intializing the student array 
let students = JSON.parse(localStorage.getItem("students"));

//get index from the search page
const urlParams = new URLSearchParams(window.location.search);
const studentIdx = urlParams.get('index');

// Load student data from local storage into page without editing
function displayStudentData(student)
{
    document.getElementByID('name').value = student.name;
    document.getElementByID('id').value = student.id;
    document.getElementByID('level').value = student.level;
    document.getElementByID('dept').value = student.dept;
}

function confirmAssign(){
    students[studentIdx].dept = document.getElementByID('dept').value;
    // Update student array in local storage
    localStorage.setItem('students', JSON.stringify(students));
    alert('Department Chosen Successfully');
    event.preventDefault();
}

// Creating a condition to check if student reached third level
if(students[studentIdx].level === 'Third'){
    displayStudentData(students[studentIdx]);
}
else{
    alert('Cannot assign department to a student who is not in third level');
    location.href = "search.html";
}
