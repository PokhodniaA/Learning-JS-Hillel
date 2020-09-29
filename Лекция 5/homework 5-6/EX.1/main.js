function fillingArray(array, count, max, min){
    for (let i = 0; i < count; i++) {
        let number = Math.round(Math.random() * (max - min) + min);
        array[i] = number
    }

    return array
}

let array = [];
let count = 10;
let max = 20;
let min = -20;

let result = fillingArray(array, count, max, min);
console.log(result);
