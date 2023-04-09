function testFun(item) {
    item.classList.toggle("dark-mode-td");
}

function lightSwitch() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    element = document.getElementById("navbar");
    element.classList.toggle("dark-mode-nav");

    var items = document.getElementsByTagName("td");
    items.foreach(testFun)
}