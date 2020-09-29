function filter(array, func) {
    tempArray = [];
    for (element of array) {
        if (func(element)) {
            tempArray.push(element)
        }
    }

    return tempArray;
}

function isEven(x) {
    return x % 2 == 0;
}


var input = [1, 2, 3, 4, 5, 6];
console.log(filter(input, isEven));
