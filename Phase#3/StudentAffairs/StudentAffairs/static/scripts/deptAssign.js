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

document.addEventListener('DOMContentLoaded', function() {
    var url = new URL(window.location.href);
    var path = url.pathname;

    if (path === '/deptAssign.html/' && url.search === '') {
        alert('Please choose a specific student to assign!');
        window.location.href = '/search.html';
    }
});

// Confirmation message that the department assignment was successfull
document.getElementById('submit').addEventListener('click', function() {
    alert('Department Assigned Successfully!');
    window.location.href = '/search.html';
})
