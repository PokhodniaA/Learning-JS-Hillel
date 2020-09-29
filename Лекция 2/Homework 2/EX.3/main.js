let whoIsThis = prompt('Кто пришел?', '');

switch (whoIsThis) {
    case null:
        console.log('Вход отменен.');
        break;

    case 'Админ':
        let password = prompt('Пароль?', '');
        switch (password) {
            case null:
                console.log('Вход отменен.');
                break

            case 'Черный Властелин':
                console.log('Добро пожаловать!');
                break;

            default:
                console.log('Пароль неверный.');
                break;
        }
        break;

    default:
        console.log('Я вас не знаю.')
        break;
}
