function collapse(id, arrowId) {
  var content = document.getElementById(id);
  var arrow = document.getElementById(arrowId);
  if (content.style.display == 'none') {
    content.style.display = 'table-row';
    arrow.style.transform = 'rotate(90deg)';
  } else {
    content.style.display = 'none';
    arrow.style.transform = 'rotate(0deg)';
  }
}





