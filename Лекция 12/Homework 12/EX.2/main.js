var user = { name: 'Алексей' }

function func(surname, patronymic) {
    alert('привет' + ', ' + this.name + ' ' + patronymic + ' ' + surname);
}

func.apply(user, ['Петров', 'Алексеевич']); 