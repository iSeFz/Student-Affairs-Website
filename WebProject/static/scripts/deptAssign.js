// Retrieve the index of student from search page
const urlParams = new URLSearchParams(window.location.search);

//Sets the values of various HTML elements on the page based on URL parameters.
function loadData(){
    document.getElementById('level').value = urlParams.get('level');
    document.getElementById('name').value = urlParams.get('name');
    document.getElementById('id').value = urlParams.get('id');
    document.getElementById('dept').value =  urlParams.get('dept');
    if(urlParams.get('level') == 'First' || urlParams.get('level') == 'Second'){
        alert("You can't assign department to first or second level students");
        window.location.href = '/search.html';
    }
}

loadData();

// Check if there is a student selected for assigning a department
document.addEventListener('DOMContentLoaded', function() {
    let url = new URL(window.location.href);
    let path = url.pathname;
    if (path === '/deptAssign.html/' && url.search === '') {
        // Create container div
        let cont = document.createElement("div");
        cont.setAttribute("id", "container");
        // Create div to contain the message
        let noStudent = document.createElement("div");
        noStudent.setAttribute("id", "noStudent");
        // Create the first paragraph node
        let p1 = document.createElement("p");
        let txt = document.createTextNode("No Student Specified!");
        p1.appendChild(txt);
        // Append the first paragraph node to div
        noStudent.appendChild(p1);
        // Create the second paragraph node with anchor inside
        let p2 = document.createElement("p");
        let anchor = document.createElement("a");
        anchor.setAttribute("href", "/search.html");
        let anotherTxt = document.createTextNode("Choose a specific student to assign!");
        anchor.appendChild(anotherTxt);
        p2.appendChild(anchor);
        // Append the second paragraph node to div
        noStudent.appendChild(p2);
        // Append the message div to the container div
        cont.appendChild(noStudent);
        // Replace the form with the container div
        document.getElementsByClassName("main")[0].replaceWith(cont);
    }
});

// Confirmation message that the department assignment was successfull
document.getElementById('submit').addEventListener('click', function() {
    alert('Department Assigned Successfully!');
    window.location.href = '/search.html';
})
