// -------------Выбор элементов -----------

elem = document.getElementById('id') // поучить элемент по айди. Так же находяться и по другим свойствам. Если элементы, то возвращают живой список.

document.querySelector('css');
document.querySelectorAll('css') // Находим элементы по селектору css. Возвращает фиксированую колекцию.

elem.matches(css) //ничего не ищет, а проверяет, удовлетворяет ли elem CSS-селектору, и возвращает true или false.

elem.closest(css) //ищет ближайшего предка, который соответствует CSS-селектору. Сам элемент также включается в поиск.

elemA.contains(elemB) //вернёт true, если elemB находится внутри elemA (elemB потомок elemA) или когда elemA==elemB.

elem.childNodes // возвращает псевдомассив со всеми детьми элемента



elem.getBoundingClientRect() //  возвращает координаты в контексте окна для минимального по размеру прямоугольника, который заключает в себе элемент elem, в виде объекта встроенного класса DOMRect.

/*Основные свойства объекта типа DOMRect:
    x/y – X/Y-координаты начала прямоугольника относительно окна,
    width/height – ширина/высота прямоугольника (могут быть отрицательными).
Дополнительные, «зависимые», свойства:
    top/bottom – Y-координата верхней/нижней границы прямоугольника,
    left/right – X-координата левой/правой границы прямоугольника.

    right = x + width
    bottom = y + height*/

document.elementFromPoint(x, y) //возвращает самый глубоко вложенный элемент в окне, находящийся по координатам (x, y).

elem.insertAdjacentHTML(where, html); //позволяет вставлять произвольный HTML в любое место документа, в том числе и между узлами! html
/*Строка HTML, которую нужно вставить

where
Куда по отношению к elem вставлять строку. Всего четыре варианта:

beforeBegin – перед elem.
afterBegin – внутрь elem, в самое начало.
beforeEnd – внутрь elem, в конец.
afterEnd – после elem.*/

/*Здесь мы рассмотрим таблицу, так как это важный частный случай и просто для примера.
В списке ниже выделены наиболее полезные:

TABLE
table.rows – коллекция строк TR таблицы.
table.caption/tHead/tFoot – ссылки на элементы таблицы CAPTION, THEAD, TFOOT.
table.tBodies – коллекция элементов таблицы TBODY, по спецификации их может быть несколько.
THEAD/TFOOT/TBODY
tbody.rows – коллекция строк TR секции.
TR
tr.cells – коллекция ячеек TD/TH
tr.sectionRowIndex – номер строки в текущей секции THEAD/TBODY
tr.rowIndex – номер строки в таблице
TD/TH
td.cellIndex – номер ячейки в строке */



// ---------------Модификация элементов --------------

elem.innerHTML // позволяет получить HTML-содержимое элемента в виде строки. получает содержимое всех элементов, включая  <script> и <style>, тогда как innerText этого не делает.

elem.data /*Свойство innerHTML есть только у узлов-элементов.
            У других типов узлов, в частности, у текстовых, есть свои аналоги: свойства nodeValue и             data. Эти свойства очень похожи при использовании, есть лишь небольшие различия в           спецификации. Мы будем использовать data, потому что оно короче. */

elem.textContent //предоставляет доступ к тексту внутри элемента за вычетом всех <тегов>.Запись в него помещает текст в элемент, при этом все специальные символы и теги интерпретируются как текст. Можно использовать для защиты от вставки произвольного HTML кода.

elem.hiden // действует так же, как и display:none;

/*У DOM-элементов есть дополнительные свойства, в частности, зависящие от класса:

value – значение для <input>, <select> и <textarea> (HTMLInputElement, HTMLSelectElement…).

href – адрес ссылки «href» для <a href="..."> (HTMLAnchorElement).

id – значение атрибута «id» для всех элементов (HTMLElement). */

element.classList // Методы:(add, remove, toggle, replace). Для работы с классамы элементов. //element.classList.add('accent');

element.className // Возвращает классы для элемента

elem.innerText //умеет считывать стили и не возвращает содержимое скрытых элементов, тогда как textContent этого не делает

elem.style // Добавлять стили к эементу. css свойства пишуться camelCase-ом. 
//elem.style.fontSize


// ------------------Метрики------------------

elem.offsetParent //находится предок элемента, который используется внутри браузера для вычисления координат при рендеринге.

elem.offsetLeft / elem.offsetTop //содержат координаты x/y относительно верхнего левого угла offsetParent.

elem.offsetWidth // внешняя ширина блока, её можно получить сложением CSS-ширины, внутренних отступов  и рамок.

elem.offsetHeight // внешняя высота блока.

elem.clientTop //ширина верхней рамки

elem.clientLeft // ширина левой рамки

elem.clientHeight // Горизонтальной прокрутки нет, так что это в точности то, что внутри рамок: CSS-высота 200px плюс верхние и нижние внутренние отступы (2 * 20px), итого 240px.

elem.clientWidth // ширина содержимого здесь равна не 300px, а 284px, т.к. 16px отведено для полосы прокрутки. Таким образом: 284px плюс левый и правый отступы – всего 324px.

// Если нет внутренних отступов padding, то clientWidth/Height в точности равны размеру области содержимого внутри рамок и полосы прокрутки (если она есть).

elem.scrollHeight // полная внутренняя высота, включая прокрученную область.

elem.scrollWidth // полная внутренняя ширина, в данном случае прокрутки нет, поэтому она равна clientWidth.

elem.scrollLeft / elem.scrollTop // ширина/высота невидимой, прокрученной в данный момент, части элемента слева и сверху.


//  -----------------------EVENTS---------------

box.addEventListener('click', function () { }); // тоже что и on... Можно передать третий элемент (true). Для того чтобы выполнение ивентов произодилось на стадии погружения

window.onload = function () { }; // Можно в него записать код. И он будет запускаться, только когда html полностью прогрузиться.

elem.onclick = function (event) { }; // Срабатывает при нажатии на элемент

elem.dblclick = function (event) { }; // Срабатывает при двойном нажатии на элемент

elem.onmousedown = function (event) { }; // Срабатывает при нажиминии ЛКМ на элемент, но не отпускании.

elem.onmouseup = function (event) { }; // Срабатывает при отпускании ЛКМ на элементе .

elem.onmousemove = function (event) { }; // Сраюатывает при движении мышки по элементу

elem.onmouseenter = function (event) { }; // Срабатывает при заходе мышки на элемент.Переходы внутри элемента, на его потомки и с них, не считаются.

elem.onmouseleave = function (event) { }; // Срабатывает при уходе мышки с элемента.Переходы внутри элемента, на его потомки и с них, не считаются.

elem.mouseover = function (event) { };
elem.mouseout = function (event) { }; // Курсор мыши появляется над элементом и уходит с него.

elem.oncontextmenu = function (event) { }; // Срабатывает при отпускании ПКМ на элементе .

elem.onchange = function () { }; // change срабатывает по окончании изменения элемента. Для текстовых <input> это означает, что событие происходит при потере фокуса.

elem.oninput = function () { }; //input срабатывает каждый раз при изменении значения.

elem.oncopy = function () { }; // при копировании

elem.onpaste = function () { }; // при вставливании

elem.oncut = function () { }; // при вырезании

elem.onkeydown = function () { } //происходит при нажатии клавиши

elem.onkeyup = function () { } // происходит при  отпускании клавиши

// ---------event------------

// event.preventDefault() -- убрать действия по умолчанию

// event.stopPropagation() -- прекращает процесс всплытия

// event.target -- элемент на котором было совершено действие.

// event.which -- События, связанные с кликом, всегда имеют свойство which, которое     позволяет определить нажатую кнопку мыши. Есть три возможных значения:
// event.which == 1 – левая кнопка
// event.which == 2 – средняя кнопка
// event.which == 3 – правая кнопка


// event.altKey -- добавить модификаторы кнопок.
/*Свойства объекта события:
    shiftKey: Shift
    altKey: Alt (или Opt для Mac)
    ctrlKey: Ctrl
    metaKey: Cmd для Mac */

// event.clientX / .clientY --  позиция относительно окна.

// event.pageX / .pageY --  позиция относительно документа.

// Для события mouseover:
// event.target -- это элемент, на который курсор перешёл.
// event.relatedTarget –- это элемент, с которого курсор ушёл (relatedTarget → target).

// Для события mouseout наоборот:
//event.target –- это элемент, с которого курсор ушёл.
// event.relatedTarget –- это элемент, на который курсор перешёл (target → relatedTarget)

// Для события keydown/keyup:
// event.key -- позволяет получить символ(например вернет z, а если  нажать вместе с shift, то будет Z)
// event.code -- всегда будет тот же;
// event.repeat -- событий, вызванных автоповтором, у объекта события свойство event.repeat равно true.


// ---------------- Атрибуты ------------

elem.setAttribute('Имя атрибута', значение); //  Добавлять в html свой атрибут
elem.getAttribute(name) //– получает значение атрибута
elem.hasAttribute(name) //– проверяет наличие атрибута
elem.removeAttribute('Имя атрибута'); //  Удалять из html  атрибут

elem.attributes //содержит псевдо-массив объектов типа Attr.


//  Дата атрибуты:
//              в HTML(не обязательно здесь) записываем атрибут data-name='action'. Использываеться для хранения мета информации
node.dataset.name // обращаемся к абтрибуту  data-name

// ------------------ Узлы -----------------

// Создавать динамические nodes:

let dataElement = document.createElement('div'); // Создаем свой тэг.

/*  !!! НУЖНО МИНИМИЗИРОВАТЬ ОПЕРАЦИИ С DOM 
            Для нового элемента перед добалением его в DOM, нужно максимально сделать операций над ним.
            Для элемента который уже существует мы сначала прячем его (display: none),потом навешиваем стили, и показываем. */

document.body.append(dataElement); // добавляем в конец DOM дерева элемент (Если мы апэндим 2 раза один и тот же элемент. То он ну будет скопирован, а будет вырезан и вставлен)
node.prepend(...nodes)// – вставляет nodes в начало node,
document.body.after(dataElement) // вставляет после элемента (в данном случае body)
document.body.before(dataElement) // вставляет перед элементом (в данном случае body)
node.replaceWith(...nodes) //– вставляет nodes вместо node.
node.remove()// – удаляет node.

elem.cloneNode(true) //создаёт «глубокий» клон элемента – со всеми атрибутами и дочерними элементами
elem.cloneNode(false) // клон будет без дочерних элементов.

let fragment = document.createDocumentFragment();// Используем для оптимизации добавления элементов в DOM. Суть: мы добавляем в фрагмент элементы и вставляем  fragment в DOM. Вместо того чтобы добавлять каждый элемент. Сам родительский блок fragment исчезает.

// -----------Дилигирование события DOM-------------

/*
    Для улушения производительности ставим ивент на родительский элемент. А при помощи event.target определяем на какой именно элемент было нажатие
 */


// ---------------HTML5 LocalStorage ---------------

// Это JSON файл.
JSON.stringify('elem');//Возвращает строку JSON, соответствующую указанному значению, возможно с включением только определённых свойств или с заменой значений свойств определяемым пользователем способом. Это Сериализация.

JSON.parse('elem');//Разбирает строку JSON, возможно с преобразованием получаемого значения и его свойств и возвращает разобранное значение.

localStorage.getItem('foo'); // получить элемент по ключу foo;

localStorage.setItem('ключ', 'значение')// добавляет в localStorage новый ключ со значением (а если такой ключ уже существует, то перезаписывает новым значением

localStorage.removeItem("Ключ")//Удаляем ключ

localStorage.clear()// Очищаем все хранилище

Storage.length// Возвращает число, представляющее количество элементов в объекте Storage.

Storage.key() // Приняв число n, метод вернёт имя n-ного ключа в Storage



//---
//создадим объект
var obj = {
    item1: 1,
    item2: [123, "two", 3.0],
    item3: "hello"
};

var serialObj = JSON.stringify(obj); //сериализуем его

localStorage.setItem("myKey", serialObj); //запишем его в хранилище по ключу "myKey"

var returnObj = JSON.parse(localStorage.getItem("myKey")) //спарсим его обратно объект
// ---

if (e == QUOTA_EXCEEDED_ERR) { } // проверяет, есть ли ещё место в localstorage


// --------------Coockies----------------

cookies.Cookie // Предоставляет информацию о HTTP cookie

cookies.CookieStore //Represents a cookie store in the browser.

cookies.OnChangedCause //Represents the reason a cookie changed.

cookies.get() / cookies.getAll() // Запрашивает информацию об одном кукис.

cookies.set() //Устанавливает кукис с заданной информацией;в том случае если подобный кукис был информация будет перезаписана.

cookies.remove() // Удаляет кукис по имени.

cookies.getAllCookieStores() // Список всех существующих куки


// ------------NPM--------------

// пакетный сборщик
// npm init // -- инициализировать папку для package.json

// npm i // --  скачать всё что находиться в package.json

// npm i * Название библиотеки * // -- (npm i jquerry) устанавливает библиотеку в проэкт




//  ---------- АЛГОРИТМЫ -------------

/*Для Сортировки Строк Таблицы */

/*1.Создать массив из объектов вида {elem: ссылка на TR, value: содержимое TR}.
2.Отсортировать массив по value. Функция сравнения во время сортировки теперь будет обращаться не к innerHTML, а к свойству объекта, это быстрее. Сортировка может потребовать многократных сравнений одного и того же элемента, отсюда выигрыш.
3.Добавить TR в таблицу в нужном порядке (автоудалятся с предыдущего места).
4.Выполнить алгоритм, но перед этим удалить таблицу из документа, а после - вставить обратно.
 */

// 1: 17