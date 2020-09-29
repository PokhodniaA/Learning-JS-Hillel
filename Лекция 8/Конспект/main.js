// -------- Object ----------

// примитивные типы: Number, string ...
// ссылочные типы: массивы, обьекты, ф-ии


player = {
    name: 'Valera',
    lastName: 'Ternavsky',
    age: 25,
    isMaried: false,
    run: function () {   // ф-ия называеться методом обьекта
        console.log('running');
    }
}

// box = {
//     width: '100px',
//     height: '200px',
//     selector: '.box',
// }

for (var i = 0, arr = []; i < 5; i++) {
    arr.push({
        width: '100px',
        height: '200px',
        selector: '.box'
    })
}


console.log(player.name);
player.run(); // вызываем метод run обьекта player

console.log(player['lastName']); // передаем ключ в виде строки. 


key = 'age';
console.log(player[key]);


player.foo = '123';
console.log(player);

player['foo'] = 'fggg';
console.log(player);

player = Object.freeze(player);   // зпретим обновлять массив. Если переменную измнять нельзя, то использываем _ (_player)
