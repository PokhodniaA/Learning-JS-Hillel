var user = { name: 'Алексей' }

function func(surname, patronymic) {
    alert('привет' + ', ' + this.name + ' ' + patronymic + ' ' + surname);
}

//Тут напишите конструкцию с bind()
func = func.bind(user);

func('Николаев', 'Иванович'); //тут должно вывести 'привет, Алексей Иванович Николаев 's