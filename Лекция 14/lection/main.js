// -----------ООП-------------

// концепция ООП -взаемодецствия между собой объектов
// наследование, инкапусляция, полиморфизм
// класс интрукция по которой создаеться объект
// объект - экземпляр определенного класса

function Human(newName) {
    console.log('work', this);
    this.name = newName;
} // класс с большой буквы

var valera = new Human('Andrew') // создаем экземпляр класса

// 1)new -> сначала создаеться новый пустой объект
// 2)после чего вызываеться функция-консруктор класса Human
// 3) новое поведение this, this смотрит на объект new Human();
// 4) устанавливает __proto__


