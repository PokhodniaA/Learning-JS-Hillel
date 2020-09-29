// // ------- Function ---------

// function Name() {

//     console.log('function');
// }  // Создание ф-ии

// NameAnnonim = function() {
//     console.log('function annonimous');
// } //анонимные ф-ии;

// Name(); // Вызываем ф-ю
// NameAnnonim();



// function arrayFiller(size, array, min, max) {   // параметров не больше 2; 

//     if(!array) {  // массив не существует ?
//         return false;
//     }

//     array.length = size;
//     min = min || 5;
//     max = max || 5;
//     for (i = 0; i < array.length; i++) {
//         array[i] = new Array(5);

//         for(j = 0; j < array[i].length; j++){
//             array[i][j] = Math.ceil(Math.random() * (max - min) + min);
//         }
//     }

//     console.log(array);

//     return array; // В идеале ф-ия должна принимать или возвращать.
// }

// // console.log(size); size недоступен
// res = arrayFiller(10,[],);

// console.log(res);



function arrayFiller(size, array, min, max) {   // параметров не больше 2; 
    // при передаче больше переметров, создаеться маcсив arguments, в котором будет все лишние значения
    // Использываем когда не знаем точное количество передеваемых элементов
    console.log(arguments);

    for (i = 0; i < array.length; i++) {
        array[i] = new Array(5);

        for(j = 0; j < array[i].length; j++){
            array[i][j] = Math.ceil(Math.random() * (max - min) + min);
        }
    }


    return array; // В идеале ф-ия должна принимать или возвращать.
}

// arrayFiller(10,[], 5, 10, 'Hello!');



// function toDo(callback) {
//     console.log(callback,'toDo');
// }

// toDo();


function toDo(callback) {
    console.log(callback,'toDo');
    callback();
}

foo = function(){
    console.log('Foo');
}

toDo(foo);