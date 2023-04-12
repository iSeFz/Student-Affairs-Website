// global variables
let students = JSON.parse(localStorage.getItem('students'));

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

// this function load data stored in local storage to modal menu
function createModal(student,idx){
    let modal = document.createElement('div');
    let modalHead = document.createElement('div');
    let title = document.createElement('div');
    let exitButton = document.createElement('button');
    let modalBody = document.createElement('div');
    // customize modal menu
    modal.classList.add('modal');
    modal.id = 'modal' + idx;
    // customize modal head
    modalHead.classList.add('modal-head');
    title.classList.add('title');
    title.textContent = "MoreInfo";
    exitButton.classList.add('close-button');
    exitButton.textContent = '\u00D7';
    let modalId = 'modal' + idx;
    exitButton.setAttribute('onclick',`closePopUp('${modalId}')`)

    //customize modal body
    modalBody.classList.add('modal-body')
    let spans = [];
    spans[0] = document.createElement('span');
    spans[1] = document.createElement('span');
    spans[2] = document.createElement('span');
    spans[3] = document.createElement('span');


    spans[0].innerHTML = '<b>Gender: </b>'+ student.gender;
    spans[1].innerHTML = '<b>Date of Birth: </b>'+ student.dob;
    spans[2].innerHTML = '<b>Phone: </b>'+ student.phone;
    spans[3].innerHTML = '<b>Email: </b>'+ student.email;


    modalHead.appendChild(title);
    modalHead.appendChild(exitButton);
    spans.forEach((span)=>{
        modalBody.appendChild(span);
        modalBody.appendChild(document.createElement('br'));
    });

    let body = document.getElementsByTagName("body")[0];
    modal.appendChild(modalHead);
    modal.appendChild(modalBody);
    body.appendChild(modal);
}

// this function is creating row with data stored in local storage
function createRow(student,idx){
    let tbody = document.querySelector('tbody');
    let newRow = document.createElement('tr');
    let cells = [];

    // table cells
    cells[0] = document.createElement('td');
    cells[0].textContent = student.name;   
    cells[1] = document.createElement('td');
    cells[1].textContent = student.id;
    cells[2] = document.createElement('td');
    cells[2].textContent = student.gpa;
    cells[3] = document.createElement('td');
    cells[3].textContent = student.level;
    cells[4] = document.createElement('td');
    cells[5] = document.createElement('td');
    
    // creat modal menu button
    let modalId = 'modal' + idx;
    cells[5].setAttribute('onclick',`popUp('${modalId}')`)

    // create checkbox div
    let checkbox = document.createElement('div');
    checkbox.classList.add('checkbox');
    // create input element
    let input = document.createElement('input');
    input.type = 'checkbox';
    input.value = 'Active';
    input.id = 'check' + idx;

    // check status
    if(student.status == 'active')
        input.checked = true;

    // create label
    let label = document.createElement('label');
    label.htmlFor = 'check' + idx;

    // insert each element at it's proper position
    checkbox.appendChild(input);
    checkbox.appendChild(label);
    cells[4].appendChild(checkbox);

    // append children to newRow
    cells.forEach((cell)=>{
        newRow.appendChild(cell);
    });
    tbody.appendChild(newRow);
    createModal(student,idx);
}

// this function load info from localStorage to table
function loadInfoToPage(){
    // create row for each student
    for(var st of students){
        createRow(st,students.indexOf(st));
    }
    // create overlay
    let body = document.querySelector('body');
    let overlay = document.createElement('div');
    overlay.classList.add('overlay');
    body.prepend(overlay);

    // select all checkboxs buttons
    let checkboxs = document.getElementsByClassName('checkbox');
    for(let checkbox of checkboxs){
        checkbox.addEventListener('click',changeStatus);
    }
}

// this function changeStatus of students in localStorage when change in table
function changeStatus(){
    let buttons = document.querySelectorAll('input[type="checkbox"]');
    for(let i = 0; i < students.length;i++){
        students[i].status = (buttons[i].checked == true) ? 'active' : 'inactive';
    }
    localStorage.clear;
    localStorage.setItem("students", JSON.stringify(students));
}

loadInfoToPage();