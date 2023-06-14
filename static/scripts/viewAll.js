
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
    studentID = id.substring(5, id.length);
    console.log(studentID);
}