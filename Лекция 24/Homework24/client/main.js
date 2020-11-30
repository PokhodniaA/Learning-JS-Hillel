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
                    resData = getGoods(data.id);
                } else {
                    (errorBlock.rendered)
                        ? errorBlock.addText('Error 401. Unknown user').show()
                        : errorBlock.addText('Error 401. Unknown user').render().show();
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
                new GoodsItem(item).toDo().render();
            }, index * 500);
        });

    }

    const signInForm = new Form(),
        form = signInForm.nodes.form,
        errorBlock = new ErrorBlock();

    signInForm.toDo().render();
    errorBlock.addToNode();

    form.onsubmit = function (event) {
        event.preventDefault();
        const login = form.login.value,
            password = form.password.value;

        if (login && password) {
            signIn(login, password);
        } else {
            (errorBlock.rendered)
                ? errorBlock.addText('You have not entered data').show()
                : errorBlock.addText('You have not entered data').render().show();
        }
    };
}
