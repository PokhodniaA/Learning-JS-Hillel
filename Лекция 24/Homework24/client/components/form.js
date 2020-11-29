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
