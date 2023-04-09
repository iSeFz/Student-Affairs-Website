function popUp(modalId){
    const targetMenu = document.getElementById(modalId);
    const targetOverlay = document.getElementsByClassName('overlay');
    targetMenu.classList.add('active');
    targetOverlay[0].classList.add('active');
}

function closePopUp(modalId){
    const targetMenu = document.getElementById(modalId);
    const targetOverlay = document.getElementsByClassName('overlay');
    targetMenu.classList.remove('active');
    targetOverlay[0].classList.remove('active');
}


function handleClick(event) {
    const targetMenu = document.querySelectorAll('[id^="modal"]');
    const targetOverlay = document.getElementsByClassName('overlay');
    if (event.target !== targetMenu && !targetMenu.contains(event.target)) {
        targetMenu.classList.remove('active');
        targetOverlay[0].classList.remove('active');
    }
}
  
document.addEventListener('click', handleClick);
  