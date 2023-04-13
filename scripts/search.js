// global variables
let students = JSON.parse(localStorage.getItem('students'));


// this function is creating row with data stored in local storage
function createRow(student,idx){
    let tbody = document.querySelector('tbody');
    let newRow = document.createElement('tr');
    newRow.classList.add('mainRow');
    newRow.style.display = 'table-row';
    let cells = [];

    // table cells
    cells[0] = document.createElement('td');
    cells[0].textContent = student.name;   
    cells[1] = document.createElement('td');
    cells[1].textContent = student.id;
    cells[2] = document.createElement('td');
    cells[2].textContent = student.gpa;
    cells[3] = document.createElement('td');
    cells[3].textContent = student.level;
    cells[4] = document.createElement('td');
    cells[4].innerHTML = "<a href='deptAssign.html?index=" + idx + "'>" + student.dept + "</a>";
    

    // append children to newRow
    cells.forEach((cell)=>{
        newRow.appendChild(cell);
    });
    tbody.appendChild(newRow);
}

// this function load info from localStorage to table
function loadInfoToPage(){
    // create row for each student
    for(var st of students){
        if(st.status == 'active')
            createRow(st,students.indexOf(st));
    }
}

function searchName(){
    let searchValue = document.getElementById("studentName").value;
    let rows = document.querySelectorAll("tbody > tr");
    let count = 0;
    rows.forEach((row)=>{
        if(row.firstElementChild.textContent.toLowerCase().startsWith(searchValue.toLowerCase())){
            row.style.display = "table-row";
            if(count % 2 == 1)
                row.style.backgroundColor ="#d2ffc265";
            else
                row.style.backgroundColor ="#FFFFFF";
            count++;
        }
        else{
            row.style.display = "none";
        }
    });
}

loadInfoToPage();

let searchField = document.getElementById("studentName");
searchField.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("searchButton").click();
    }
});