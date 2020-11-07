// ----------------------- DOM --------------------

console.dir(document.body);

const divs = document.getElementsByTagName("div");
console.log(divs);

[].forEach.call(divs, (div) => console.log(div)); // заимствование методов

const element = document.querySelector('div.item'); // задаем любой селектор
const elements = document.querySelectorAll('div') //выбираем все. Лучше его и есть forEach
console.log(elements);
console.log(elements[0].className = 'item');

// block.style.color = 'red';


