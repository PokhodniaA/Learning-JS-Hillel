function addList(list) {
    if (list) {
        let li = document.createElement('li');
        li.textContent = list;
        ul.append(li);
    }
}

let ul = document.querySelector('#ul'),
    list = true;

while (list) {
    list = prompt('Введите, что хотите купить', '');
    addList(list);
} 
