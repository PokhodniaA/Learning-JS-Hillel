array = new Array(10);

for (i = 0; i < array.length; i++) {
    arrayItem = Math.round(Math.random() *(20 - (-20)) + (-20));
    array[i] = arrayItem;
    console.log(array[i]);
    sumElements = 0
    if (array[i] > 0 && array[i] % 2 == 0){
        sumElements += array[i]
    }
}

array[array.length - 1] = 0;



console.log(sumElements, 'sum');