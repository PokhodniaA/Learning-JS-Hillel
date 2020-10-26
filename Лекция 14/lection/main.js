// -----------ООП-------------

// концепция ООП - взаемодецствия между собой объектов
// наследование, инкапусляция, полиморфизм
// класс интрукция по которой создаеться объект
// объект - экземпляр определенного класса

function Human(newName) {
    console.log('work', this);
    this.name = newName;
} // класс с большой буквы

// ф-ия конструктор ничего не возваращает, но может вернкть массив и объект через ретерн

var valera = new Human('Andrew') // создаем экземпляр класса

// 1)new -> сначала создаеться новый пустой объект
// 2)после чего вызываеться функция-консруктор класса Human
// 3) новое поведение this, this смотрит на объект new Human();
// 4) устанавливает __proto__


function HTMLElement() {

}

HTMLElement.prototype.render = function () {
    console.log('render');
    this.el = {}
}

// HTMLAnchor.prototype = Object.create(HTMLElement.prototype)  делаеться до создания объекта
HTMLElement.prototype.name = 'hello';




