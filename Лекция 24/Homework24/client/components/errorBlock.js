function ErrorBlock() {
    this.block = document.createElement('div');
}

ErrorBlock.prototype.addToNode = function (errorText) {
    this.block.classList.add('errorBlock');
    if (errorText) { this.addText(errorText); }
    return this
}

ErrorBlock.prototype.addText = function (errorText) {
    if (this.text !== errorText) {
        this.text = errorText;
        this.block.innerHTML = errorText;
    }
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