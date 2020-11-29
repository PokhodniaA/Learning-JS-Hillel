function Form() {
    this.nodes = {
        form: document.createElement('form'),
        button: document.createElement('button'),
        loginLabel: document.createElement('label'),
        login: document.createElement('input'),
        passwordLabel: document.createElement('label'),
        password: document.createElement('input'),
    }
}

Form.prototype.toDo = function () {
    this.appendToNodes();
    this.build();
    return this
}


Form.prototype.appendToNodes = function () {
    const { form, button, loginLabel, login, passwordLabel, password } = this.nodes;
    form.classList.add('right');
    loginLabel.textContent = 'Login:';
    login.name = 'login';
    passwordLabel.textContent = 'Password:'
    password.type = 'password';
    password.name = 'password';
    button.textContent = 'Sign in';
}

Form.prototype.build = function () {
    const { form, button, loginLabel, login, passwordLabel, password } = this.nodes;
    loginLabel.append(login);
    passwordLabel.append(password);
    form.append(loginLabel, passwordLabel, button);
}

Form.prototype.render = function () {
    document.body.append(this.nodes.form);
    setTimeout(() => {
        this.nodes.form.classList.remove('right');
        this.nodes.form.classList.add('center')
    }, 100)
}

Form.prototype.hide = function () {
    this.nodes.form.classList.remove('center');
    this.nodes.form.classList.add('right')
}

// ======================================
function ErrorBlock() {
    this.block = document.createElement('div');
}

ErrorBlock.prototype.addToNode = function (errorText) {
    this.block.classList.add('errorBlock');
    this.block.innerHTML = errorText;

    return this
}

ErrorBlock.prototype.render = function () {
    this.rendered = true;
    document.body.append(this.block);

    return this
}

ErrorBlock.prototype.show = function () {
    setTimeout(() => { this.block.classList.add('show') }, 50) // без setTimeout не выезжает.
    setTimeout(() => { this.block.classList.remove('show') }, 2000);
}
// ======================================

function GoodsItem(data) {
    this.data = data;
    this.nodes = {
        mainBlock: document.createElement('div'),
        list: document.createElement('ul'),
        brandLi: document.createElement('li'),
        modelLi: document.createElement('li'),
        priceLi: document.createElement('li')
    }
}

GoodsItem.prototype.toDo = function () {
    this.appendToNodes();
    this.build();

    return this
}

GoodsItem.prototype.appendToNodes = function () {
    const { mainBlock, list, brandLi, modelLi, priceLi } = this.nodes,
        { brandName, modelName, price } = this.data;

    mainBlock.classList.add('items');
    list.classList.add('items_list');

    brandLi.textContent = `Brand: ${brandName}`;
    modelLi.textContent = `Model: ${modelName}`;
    priceLi.textContent = `Price: ${price}UAH`;
}

GoodsItem.prototype.build = function () {
    const { mainBlock, list, brandLi, modelLi, priceLi } = this.nodes;

    list.append(brandLi, modelLi, priceLi);
    mainBlock.append(list);
}

GoodsItem.prototype.render = function () {
    document.body.append(this.nodes.mainBlock);
    setTimeout(() => { this.nodes.mainBlock.classList.add('show') }, 100);

}

// ======================================
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
        const items = data.forEach((item, index) => { // чтобы появлялись элементы постепенно
            setTimeout(() => {
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
    errorEmptyData.addToNode('You have not entered data');
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
// 1. после отрисоки элементов убрать форму и ошибки
// 2. сделать одну ошибку и менять в ней текст
// 3. классы компонентов сделать в отделых файлах