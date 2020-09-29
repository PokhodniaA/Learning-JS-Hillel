s// Массивы
// Упорядоченый набор однотипных данных

// data = ['a','b','c','d'];
// data[2]; // == c

data = ['a', 'b', 'c', 'd', 'e'];

console.log(data.length, 'length'); // длина масива

console.log(data[0], data[1], data[2], data[3]);
console.log(data[data.length - 1]); // последний элемент

data.length = 1000;  // монжо задать длину пустых ячеек
console.log(data);

data[500] = 'g'; // задаем значение на 500 элементе
console.log(data);

data[0] = 'Новое значение' // перезаписываем значения 
console.log(data);

// можно хранить разные типы данных, НО ТАК НЕ ДЕЛАТЬ!!!

data[3] = 123 // перезаписываем значения 
console.log(data);

data2 = []; // пустой масив (литерал масcива)
array = new Array(10, 15); // ещё один способ создать массив, первый аргумент = пустые ячейки. 
// Если 2 и больше значения, это элементы массива.
console.log(array);



data = ['a', 'b', 'c', 'd', 'e'];

for (i = 0; i < data.length; ++i) { // цикл пробега по массиву
    console.log(i, data[i]);
}

array = new Array(3);

// 0 < 0.
// for (i = 0; i < array.length; ++i) { // цикл пробега по массиву. Проверка строго меньше 
//     debugger
//     array[i] = prompt('Input:','');
// }

console.log(array, 'array');

for (i = 0, size = array.length; i <= size; ++i) { // цикл пробега по массиву.
    array[i] = prompt('Input:','');
}


//-----------------MATH------------------

// Math.round(); // округляет числа по математике
// Math.floot();// округляет числа в меньшую
// Math.ceil();// округляет числа в большую

// Math.random() *(max - min) + min    // рандомное число в диапазоне чисел