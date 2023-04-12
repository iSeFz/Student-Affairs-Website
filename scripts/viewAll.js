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


let students = JSON.parse(localStorage.getItem('students'));


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
    exitButton.setAttribute('onclick',`popUp('${modalId}')`)

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

function loadInfoToPage(){
    // create row for each student
    for(var st of students){
        createRow(st,students.indexOf(st));
    }

    let body = document.querySelector('body');
    let overlay = document.createElement('div');
    overlay.classList.add('overlay');
    body.prepend(overlay);
}

loadInfoToPage();