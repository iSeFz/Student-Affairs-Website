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
    const promise = new Promise((resolve, reject) => {
        // Load student data from local storage
        displayStudentData(students[studentIdx]);
        // Check if student is in third level
        if (students[studentIdx].level !== "Third") {
            reject('Cannot assign department to a student not in the third level!');
        } else {
            resolve("Department Assigned Successfully");
        }
    });
    promise.catch(error => {
        setTimeout(() => {
            alert(error);
            location.href = 'search.html';
        }, 20);
    })
       
}
else {
    let emptyStudent = {
        name: "",
        id: "",
        level: "",
        dept: ""
    };
    displayStudentData(emptyStudent);
    setTimeout(() => {
        const response = confirm("No student specified for assigning department\n Do you want to specify Student")
        if(response){
            location.href = 'search.html';
        }
        else{
            location.href = 'index.html';
        }
    }, 20);
}