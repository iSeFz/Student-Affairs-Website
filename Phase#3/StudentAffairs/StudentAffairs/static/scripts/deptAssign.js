// Retrieve the index of student from search page
const urlParams = new URLSearchParams(window.location.search);


// Assign department to student
function confirmAssign(){
    alert('Department Assigned Successfully');
    event.preventDefault();
    location.href = 'search.html';
}


//Sets the values of various HTML elements on the page based on URL parameters.

function loadData(){
    document.getElementById('name').value = urlParams.get('name');
    document.getElementById('id').value = urlParams.get('id');
    document.getElementById('level').value = urlParams.get('level');
    document.getElementById('dept').value =  urlParams.get('dept');
}

loadData();

document.getElementById('level').addEventListener('mousedown', function(e) {
    e.preventDefault();
  }, false);