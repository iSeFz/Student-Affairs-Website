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

function createModal(student,table,idx){
    let modal = document.createElement('div');
    modalHead = document.createElement('div');
    title = document.createElement('div');
    existButton = document.createElement('button');
    modalBody = document.createElement('div');
    // customize modal menu
    modal.classList.add('modal');
    modal.id = 'modal' + idx;
    // customize modal head
    modalHead.classList.add('modal-head');
    title.classList.add('title');
    existButton.classList.add('close-button');
    existButton.textContent = '\u00D7';
    let modalId = 'modal' + idx;
    existButton.setAttribute('onclick',`popUp('${modalId}')`)
    //customize modal body
    modalBody.classList.add('modal-body')


    modalHead.appendChild(title);
    modalHead.appendChild(existButton);
    modal.appendChild(modalHead);
    modal.appendChild(modalBody);
    table.appendChild(modal);

}


function createRow(student,idx){
    let tbody = document.querySelector('tbody');
    let newRow = document.createElement('tr');

    // table cells
    let cell1 = document.createElement('td');
    cell1.textContent = student.name;   
    let cell2 = document.createElement('td');
    cell2.textContent = student.id;
    let cell3 = document.createElement('td');
    cell3.textContent = student.gpa;
    let cell4 = document.createElement('td');
    cell4.textContent = student.level;
    let cell5 = document.createElement('td');
    let cell6 = document.createElement('td');
    
    // creat modal menu button
    let modalId = 'modal' + idx;
    cell6.setAttribute('onclick',`popUp('${modalId}')`)

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
    cell5.appendChild(checkbox);

    // append children to newRow
    newRow.appendChild(cell1);
    newRow.appendChild(cell2);
    newRow.appendChild(cell3);
    newRow.appendChild(cell4);
    newRow.appendChild(cell5);
    newRow.appendChild(cell6);
    tbody.appendChild(newRow);
    createModal(student,tbody,idx);
}

for(var st of students){
    createRow(st,students.indexOf(st));
}