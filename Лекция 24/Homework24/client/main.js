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
    password.name = 'password';
    button.textContent = 'Sign in';
}

Form.prototype.build = function () {
    const { form, button, loginLabel, login, passwordLabel, password } = this.nodes;
    loginLabel.append(login);
    passwordLabel.append(password);
    form.append(loginLabel);
    form.append(passwordLabel);
    form.append(button);
}

Form.prototype.render = function () {
    document.body.append(this.nodes.form);
    setTimeout(() => {
        this.nodes.form.classList.remove('right');
        this.nodes.form.classList.add('center')
    }, 100)

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
    document.body.append(this.block);
}

ErrorBlock.prototype.show = function () {
    setTimeout(() => { this.block.classList.add('show') }, 50) // без setTimeout не выезжает.
    setTimeout(() => { this.block.classList.remove('show') }, 2000);
}
// ======================================

window.onload = function () {
    const signInForm = new Form(),
        form = signInForm.nodes.form;
    errorEmptyData = new ErrorBlock();

    signInForm.toDo().render();
    errorEmptyData.addToNode('You have not entered data').render();

    form.onsubmit = function (event) {
        event.preventDefault();
        let login = form.login.value,
            password = form.password.value;

        (login || password) ? console.log(login, password) : errorEmptyData.show();
    };
}