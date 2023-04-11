function confirmDelete() {
    if (confirm('Are you sure you want to delete this student?')) {
        location.href = 'index.html';
        alert('Student deleted successfully!');
    } else {
        event.preventDefault();
    }
}

function confirmEdit() {
    alert('Student data updated successfully!');
    event.preventDefault();
}
