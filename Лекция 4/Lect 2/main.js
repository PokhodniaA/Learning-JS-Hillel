let array = [10,1,6,3,4,5,6];
arrayLength = array.length;

minElement = array[0]

array.forEach(function callback(element) {
    if (element % 2 == 0 && element < minElement) {
        minElement = element
    }
})
console.log(minElement);