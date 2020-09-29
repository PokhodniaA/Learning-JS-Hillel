function copy(array, func) {
    let newArray = [];
    for (element of array) {
        result = func ? func(element) : element;
        newArray.push(result);
    }

    return newArray
}

function modify(element) {
    return element * 10
}


array = [1, 2, 3, 4, 5, 6, 7, 20, 900];

copyArray = copy(array);
console.log(copyArray);

arrayWithFunc = copy(array, modify)
console.log(arrayWithFunc);