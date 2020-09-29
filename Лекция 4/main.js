//Двумерные массивы

array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

console.log(array[1][1]);

// массивы могут быть разного размера

array = [
    [1, 2, 3],
    [4, 5, 6, 7, 8],
    [7, 8, 9],
];

console.log(array[1][4]);


data = new Array(5);

for(i = 0; i < data.length; i++){
    data[i] = new Array(5);
    for (j = 0; j < data[i].length; j++) {
        data[i][j] = Math.round(Math.random() * 10);

        document.write(data[i][j]+' ')
    }
    document.write('<br>');
}