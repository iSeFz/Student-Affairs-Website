// function popUp(modalId){
//     const targetMenu = document.getElementById(modalId);
//     const targetOverlay = document.getElementsByClassName('overlay');
//     targetMenu.classList.add('active');
//     targetOverlay[0].classList.add('active');
// }

// function closePopUp(modalId){
//     const targetMenu = document.getElementById(modalId);
//     const targetOverlay = document.getElementsByClassName('overlay');
//     targetMenu.classList.remove('active');
//     targetOverlay[0].classList.remove('active');
// }

// function handleClick(event) {
//     console.log("TESATEST");
//     const targetMenu = document.querySelectorAll('[id^="modal"]');
//     const targetOverlay = document.getElementsByClassName('overlay');
//     targetMenu.forEach((menu) => {
//       if (event.target.id !== menu && !menu.contains(event.target)) {
//         if (menu.classList.contains('active')) {
//           menu.classList.remove('active');
//           targetOverlay[0].classList.remove('active');
//         } else {
//           menu.classList.add('active');
//           targetOverlay[0].classList.add('active');
//         }
//       }
//     });
//   }

// // function handleClick(event) {
// //     const targetMenu = document.querySelectorAll('[id^="modal"]');
// //     const targetOverlay = document.getElementsByClassName('overlay');
// //     for(var i in targetMenu){
// //         if(event.target.id !== targetMenu[i] && !targetMenu[i].contains(event.target)){
// //             if(!targetMenu[i].classList.contains('active')) {
// //                 targetMenu[i].classList.add('active');
// //                 targetOverlay[0].classList.add('active');
// //             }else{
// //                 targetMenu[i].remove('active');
// //                 targetOverlay[0].classList.remove('active');
// //             }
// //         }
// //     }
// //     // if (event.target.id !== targetMenu && !targetMenu.contains(event.target)) {
// //     //     targetMenu.classList.remove('active');
// //     //     targetOverlay[0].classList.remove('active');
// //     // }
// // }
  
// document.addEventListener('click', handleClick);
  

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
    const targetMenus = document.querySelectorAll('[id^="modal"]');
    const targetOverlay = document.getElementsByClassName('overlay');
    targetMenus.forEach((menu) => {
        if (event.target.id === menu.dataset.trigger) {
            popUp(menu.id);
        } else if (event.target.classList.contains('close')) {
            closePopUp(event.target.closest('.modal').id);
        } else if (event.target.classList.contains('overlay')) {
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