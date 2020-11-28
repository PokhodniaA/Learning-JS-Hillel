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
    document.body.append(this.block);
}

ErrorBlock.prototype.show = function () {
    setTimeout(() => { this.block.classList.add('show') }, 50) // без setTimeout не выезжает.
    setTimeout(() => { this.block.classList.remove('show') }, 2000);
}
// ======================================

function getStart(form) {
    form.classList.remove('right');
    form.classList.add('center')
}


function getForm() {
    const form = document.querySelector('form'),
        button = form.querySelector('button'),
        login = form.querySelector('input[name=login]'),
        password = form.querySelector('input[name=password]');
    return {
        form: form,
        button: button,
        login: login,
        password: password,
    }
}

window.onload = function () {
    const signInForm = getForm(),
        errorEmptyData = new ErrorBlock();

    errorEmptyData.addToNode('You have not entered data').render();
    console.log(signInForm);
    getStart(signInForm.form)

    signInForm.form.onsubmit = function (event) {
        event.preventDefault();
        let login = signInForm.login.value,
            password = signInForm.password.value;

        (login || password) ? console.log(login, password) : errorEmptyData.show();
    };
}

