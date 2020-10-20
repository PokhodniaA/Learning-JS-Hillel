// --------- bind -------------

function toDo(){
    console.log(this.value);
}

var foo = {
    value: 'v'
}

var toDo = toDo.bind(foo);

toDo(); // Если нескольок раз вызывать
// необязательно привязывать объекты, можно частично передавать параметры ф-ии

setTimeout(function(){
    console.log('Hello');
}, 5000);// Вызывает ф-ю через 5 сек (5000 = 5c)

// setInterval()// Вызывает ф-ю каждые n секунд

// --------------- OOP ----------------

