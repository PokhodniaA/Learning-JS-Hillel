function сonvert(array, newArray) {
    newArray = newArray || [];
    for (let i = 0; i < array.length; i++) {
        (typeof (array[i]) == 'object') ? сonvert(array[i], newArray) :
            newArray.push(array[i]);
    }

    return newArray
}


array = [[1, 2, 3, [3.1], 4, [5, 6, [7, 8]]]];
console.log(сonvert(array));