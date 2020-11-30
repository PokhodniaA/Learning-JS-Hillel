window.onload = function () {

    function signIn(login, password) {
        ajax({
            url: 'http://localhost:3003/',
            method: 'post',
            data: {
                "login": login,
                "password": password,
            },
            success(data, status) {
                if (status == 200) {
                    console.log(`${status}-OK`);
                    resData = getGoods(data.id);
                } else {
                    console.log('Unauthorized');
                    (errorUnauthorized.rendered) ? errorUnauthorized.show() : errorUnauthorized.render().show();
                }
            }
        })

    }

    function getGoods(id) {
        ajax({
            url: 'http://localhost:3003/goods',
            method: 'post',
            data: id,
            success(data, status) {
                showInformation(data)
            }
        })
    }

    function showInformation(data) {
        signInForm.hide();
        const items = data.forEach((item, index) => {
            setTimeout(() => {  // чтобы появлялись элементы постепенно
                const elem = new GoodsItem(item).toDo();
                elem.render();
            }, index * 500);
        });

    }

    const signInForm = new Form(),
        form = signInForm.nodes.form,
        errorEmptyData = new ErrorBlock(),
        errorUnauthorized = new ErrorBlock();

    signInForm.toDo().render();
    errorEmptyData.addToNode('You have not entered data'); // создаю отдельный блок для каждой ошибки, чтобы не менять каждый раз текст.
    errorUnauthorized.addToNode('Error 401. Unknown user ');

    form.onsubmit = function (event) {
        event.preventDefault();
        const login = form.login.value,
            password = form.password.value;

        if (login && password) {
            signIn(login, password);
        } else {
            (errorEmptyData.rendered) ? errorEmptyData.show() : errorEmptyData.render().show();
        }
    };
}


// -------to do list------------
// 1. после отрисоки элементов убрать форму из DOM ?
// 2. сделать одну ошибку и менять в ней текст ?
// 4. сделать рефакторинг