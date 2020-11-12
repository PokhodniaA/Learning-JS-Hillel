// ---------- events, делегирование ------------

window.onload = function () {
    let box = document.querySelector('.box');
    console.log(box);

    box.setAttribute('foo', 123123); // добавляем нестандартные атрибуты

    box.removeAttribute('foo', 123); // удалять атрибуты

    const actions = {
        close() {
            console.log('close');
        },
        edit() {
            console.log('edit');
        },
        open() {
            console.log('open');
        },
    }

    const buttons = document.querySelectorAll('[data-action]');
    console.log(buttons);

    buttons.forEach(button => {
        // console.log(button)
        console.log(button.dataset.action);
        button.addEventListener('click', actions[button.dataset.action]);
    });

    // ----createElement-----

    const data = document.createElement('div');
    console.dir(data);
    data.innerText = 'hello world';
    data.style.color = 'blue';

    document.body.append(data);// вставляет в конец родителя узел.

    // document.body.prepend(data);// вставляет в начало родителя. НЕ ДУБЛИРУЕТ, а ПЕРЕЗАПИСЫВАЕТ.
    // document.body.after(data); // После родителя
    // document.body.before(data)// До родителя



};// вызываеться когда полностю отрисуеться


// -----------event------------

// event.stopPropagation(); // там где вызыветься события не всплываеться


// -----------

const btnOpen = document.querySelector('.open');

console.log(btnOpen);
