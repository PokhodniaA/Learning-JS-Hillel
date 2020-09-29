let n = 5; let m = 5;
let min = -42; let max = 38;

let array = [];

for (i = 0; i < n; i++){
    let tempArray = [];
    for(j = 0; j < m; j++){
        let num = Math.round(Math.random() * (max - min) + min);
        tempArray[j] = num;
    }
    array[i] = tempArray;
}

console.log(array);

let minElement = array[0][0]; let minArrayIndex = 0; let miArrayIndexElement = 0;


array.forEach(function callback(element, index){
    element.forEach(function (number, numIndex) {
        if (number < minElement) {
            minElement = number;
            minArrayIndex = index;
            miArrayIndexElement = numIndex;
        }
    } )
});

console.log(minElement); console.log(minArrayIndex);

array[minArrayIndex][miArrayIndexElement] = array[minArrayIndex][0];
array[minArrayIndex][0] = minElement

console.log(array);


