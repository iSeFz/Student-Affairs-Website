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