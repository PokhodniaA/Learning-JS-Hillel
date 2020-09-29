function fillingArray(array, index) {
    let i = index || 0;
    if (typeof (array[i]) == 'object') {
        array[i] = fillingArray(array[i])
    } else {
        return fillingRandomNumber(array, i);
    }
    return fillingArray(array, i + 1)
}

function fillingRandomNumber(array, index) {
    let j = index || 0;
    if (j == array.length) {
        return array;
    }
    array[j] = randomNumber();
    return fillingRandomNumber(array, j + 1);
}

function randomNumber() {
    max = 20; min = -20;
    return Math.round(Math.random() * (max - min) + min);
}


array = new Array(new Array(4), new Array(3), new Array(new Array(6), new Array(4)));
console.log(fillingArray(array), 'Array');

newArray = new Array(new Array(4), new Array(new Array(3), new Array(2)),
    new Array(new Array(6), new Array(new Array(10), new Array(5))));
console.log(fillingArray(newArray), 'New Array');


// --------------- Циклами ------------------


// function fillingArray(array) {
//     for (let i = 0; i < array.length; i++) {
//         if (typeof (array[i]) == 'object') {

//             for (let j = 0; j < array[i].length; j++) {
//                 if (typeof (array[i][j]) == 'object') {

//                     for (let k = 0; k < array[i][j].length; k++) {
//                         if (typeof (array[i][j][k]) == 'object') {

//                         } else {
//                             array[i][j][k] = randomNumber();
//                         }
//                     }

//                 } else {
//                     array[i][j] = randomNumber();
//                 }
//             }

//         } else {
//             array[i] = randomNumber();
//         }
//     }
//     return array
// }

// function randomNumber() {
//     max = 20; min = -20;
//     return Math.round(Math.random() * (max - min) + min);
// }


// array = new Array(new Array(4), new Array(3), new Array(new Array(6), new Array(4)));
// console.log(fillingArray(array));



// ----------- test ---------------

// function fillingArray(array) {
//     for (let i = 0; i < array.length; i++) {
//         if (typeof (array[i]) == 'object') {  // array.isArray - проверка на массив
//             array[i] = fillingArray(array[i])
//         } else {
//             array[i] = randomNumber();
//         }
//     }
//     return array
// }

// function randomNumber() {
//     max = 20; min = -20;
//     return Math.round(Math.random() * (max - min) + min);
// }


// array = new Array(new Array(4), new Array(3), new Array(new Array(6), new Array(4)));
// console.log(fillingArray(array));