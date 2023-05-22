function searchName() {
    let searchValue = document.getElementById("studentName").value;
    let rows = document.querySelectorAll("tbody > tr");
    let count = 0;
    rows.forEach((row) => {
        if (row.firstElementChild.textContent.toLowerCase().startsWith(searchValue.toLowerCase())) {
            row.style.display = "table-row";
            if (count % 2 == 1)
                row.style.backgroundColor = "#d2ffc265";
            else
                row.style.backgroundColor = "#FFFFFF";
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
function getData(studentID){
    // create request
    let myRequest = new XMLHttpRequest();
    myRequest.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            // get response
            response = this.responseText;
            // parse response to json
            response = JSON.parse(response);
            // create query string in url
            query = "name=" + response.name + "&id=" + response.id + 
            "&dept=" + response.dept + "&level=" + response.level;
            window.location.href = '/deptAssign.html/?' + query;
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