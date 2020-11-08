function addClassSingle(element) {
    for (i of li) {
        i.classList.remove('selected')
    }
    element.classList.add('selected')
}

function addClassMulti(element) {
    element.classList.add('selected')
}

const ul = document.querySelector('ul'),
    li = document.querySelectorAll('li');

ul.onclick = function (event) {
    let target = event.target;
    (event.metaKey || event.ctrlKey) ? addClassMulti(target) :
        addClassSingle(target);
}

ul.onmousedown = function () {
    return false;
};