
// this function open modal menu 
function popUp(modalId){
    const targetMenu = document.getElementById(modalId);
    const targetOverlay = document.getElementsByClassName('overlay');
    targetMenu.classList.add('active');
    targetOverlay[0].classList.add('active');
}

// this function close modal menu when clicked on close button
function closePopUp(modalId){
    const targetMenu = document.getElementById(modalId);
    const targetOverlay = document.getElementsByClassName('overlay');
    targetMenu.classList.remove('active');
    targetOverlay[0].classList.remove('active');
}

// this function close modal menu when clicked outside it
function handleClick(event) {
    const targetMenus = document.querySelectorAll('[id^="modal"]');
    const targetOverlay = document.getElementsByClassName('overlay');
    targetMenus.forEach((menu) => {
        if (event.target.classList.contains('close')) {
            closePopUp(event.target.closest('.modal').id);
        } else if (event.target.classList.contains('overlay')) {
            if (document.querySelectorAll('[id^="modal"].active').length > 0)
                closePopUp(document.querySelectorAll('[id^="modal"].active')[0].id);
        }
    });
    if (document.querySelectorAll('[id^="modal"].active').length > 0) {
        targetOverlay[0].classList.add('active');
    } else {
        targetOverlay[0].classList.remove('active');
    }
}

document.addEventListener('click', handleClick);

function changeStatus(id){
    let studentID = id.substring(5, id.length);
    let status = document.getElementById(id).checked;
    status = (status) ? 'Active' : 'Inactive';
    let myRequest = new XMLHttpRequest();
    myRequest.open('POST', '/changeStatus', true);
    myRequest.setRequestHeader('Content-Type', 'application/json');
    myRequest.setRequestHeader('x-csrftoken', document.querySelector('[name=csrfmiddlewaretoken]').value);
    myRequest.send(JSON.stringify({
        'studentID': studentID,
        'status': status
    }))
}