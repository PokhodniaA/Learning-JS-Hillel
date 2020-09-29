// array = [1, 2, 3, 4, 5, 6, 7, 8];

// halfArray = (array.length - 1) / 2
// if (array.length % 2 == 0) {
//     newArray = array.splice(halfArray, 2);
// } else {
//     newArray = array.splice(halfArray, 1);
// }



// console.log(array);


array = [1, 2, 3, 4, 5, 6, 7, 8];

count = array.length % 2 == 0? 2 : 1;
pos = (array.length - 1) / 2;
array.splice(pos, count);


console.log(array);