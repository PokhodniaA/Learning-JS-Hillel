array = [6, 7, 2, 3, 5, 7];

document.write('<ul>')
for (let element of array) {
    document.write('<li>' + element + '</li>');
}
document.write('</ul>')



//без цикла 

// document.write('<ul><li>');
// document.write(array.join('</li></li>'));
// document.write('</li></ul>');