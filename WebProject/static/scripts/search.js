function searchName() {
    let searchValue = document.getElementById("studentName").value;
    let rows = document.querySelectorAll("tbody > tr");
    let count = 0;
    rows.forEach((row) => {
        if (row.firstElementChild.textContent.toLowerCase().startsWith(searchValue.toLowerCase())) {
            row.style.display = "table-row";
            if (count % 2 == 1)
                row.style.backgroundColor = "#FFFFFF";
            else
                row.style.backgroundColor = "#d2ffc265";
            count++;
        }
        else {
            
            row.style.display = "none";
        }
    });
    if (count == 0) {
        alert('There are no students with that name!');
        location.href = 'search.html';
    }
}

let searchField = document.getElementById("studentName");
if (searchField != null) {
    searchField.addEventListener("keypress", function (event) {
        // If the user presses the "Enter" key on the keyboard
        if (event.key === "Enter") {
            // Cancel the default action, if needed
            event.preventDefault();
            // Trigger the button element with a click
            document.getElementById("searchButton").click();
        }
    });
}
// Function take student data from specific row and send it to deptAssign.html
function getData(studentID, extended){
    // create request
    let myRequest = new XMLHttpRequest();
    myRequest.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            // get response
            response = this.responseText;
            // parse response to json
            response = JSON.parse(response);
            if(extended){
                // create query string in url
                query = "name=" + response.name + "&id=" + response.id + 
                "&dept=" + response.dept + "&level=" + response.level + "&gpa=" + response.gpa
                + "&dob=" + response.dob + "&phone=" + response.phone + "&email=" + response.email
                + "&status=" + response.status + "&gender=" + response.gender;
                window.location.href = '/editStudent.html/?' + query;
            }
            else{
                // create query string in url
                query = "name=" + response.name + "&id=" + response.id + 
                "&dept=" + response.dept + "&level=" + response.level;
                window.location.href = '/deptAssign.html/?' + query;
            }
        }
    }
    // send request to server
    myRequest.open('POST', '/getStudent', true);
    // set request header
    myRequest.setRequestHeader('Content-Type', 'application/json');
    myRequest.setRequestHeader('x-csrftoken', document.querySelector('[name=csrfmiddlewaretoken]').value);
    // send request body to server with student id
    myRequest.send(JSON.stringify({
        studentID: studentID
    }));
}

// Check if there are any active students before loading the table
this.window.addEventListener('DOMContentLoaded', function() {
    var activeStudents = document.querySelectorAll('.mainRow'); 
    if (activeStudents.length === 0) {
        // Create container div
        let cont = this.document.createElement("div");
        cont.setAttribute("id", "container");
        // Create div to contain the message
        let noActive = this.document.createElement("div");
        noActive.setAttribute("id", "noActive");
        // Create the first paragraph node
        let p1 = this.document.createElement("p");
        let txt = this.document.createTextNode("No Active Students Found!");
        p1.appendChild(txt);
        // Append the first paragraph node to div
        noActive.appendChild(p1);
        // Create the second paragraph node with anchor inside
        let p2 = this.document.createElement("p");
        let anchor = this.document.createElement("a");
        anchor.setAttribute("href", "viewAll.html");
        let anotherTxt = this.document.createTextNode("Change the status of students to search!");
        anchor.appendChild(anotherTxt);
        p2.appendChild(anchor);
        // Append the second paragraph node to div
        noActive.appendChild(p2);
        // Append the message div to the container div
        cont.appendChild(noActive);
        // Replace the table with the container div
        this.document.getElementById("Table").replaceWith(cont);
    }
});