function MakePerson(jumpHeight, step) {
    this.person = document.querySelector('#person');
    this.computedStylePerson = getComputedStyle(this.person);
    this.personY = parseInt(this.computedStylePerson.top);
    this.defaultWidth = this.person.clientWidth;
    this.defaultHeight = this.person.clientHeight;
    this.jumpHeight = jumpHeight;
    this.step = step;
}

MakePerson.prototype.keyDown = function (event) {
    switch (event.code) {
        case 'ArrowLeft':
        case 'ArrowRight':
            this.moveXAxis(event);
            break;
        case 'ArrowUp':
        case 'ArrowDown':
            this.moveYAxis(event);
            break;
        case 'Space':
        case 'KeyZ':
            this.specialMove(event);
            break;
        default:
            break;
    }
}

MakePerson.prototype.keyUp = function (event) {
    const person = this;
    switch (event.code) {
        case 'KeyZ':
            this.person.setAttribute('src', 'img/batman.png');
            document.onkeydown = this.keyDown.bind(person);
            break;
        default:
            break;
    }
}

MakePerson.prototype.move = function (person) {
    document.onkeydown = this.keyDown.bind(person);
    document.onkeyup = this.keyUp.bind(person);
}

MakePerson.prototype.getPositionX = function (coordinateX) {
    const windowWidth = window.innerWidth;
    if (coordinateX < 0) {
        return 0
    } else if (coordinateX > windowWidth - this.defaultWidth) {
        return windowWidth - this.defaultWidth;
    } else {
        return coordinateX
    }
}

MakePerson.prototype.getPositionY = function (coordinateY) {
    const windowHeight = window.innerHeight;
    if (coordinateY < this.defaultHeight) {
        return this.defaultHeight;
    } else if (coordinateY > windowHeight) {
        return windowHeight;
    } else {
        return coordinateY
    }
}

MakePerson.prototype.moveXAxis = function (event) {
    const personX = parseInt(this.computedStylePerson.left);
    switch (event.code) {
        case 'ArrowRight':
            this.person.style.left = this.getPositionX(personX + this.step) + 'px';
            break
        case 'ArrowLeft':
            this.person.style.left = this.getPositionX(personX - this.step) + 'px';
            break
        default:
            break;
    }
}

MakePerson.prototype.moveYAxis = function (event) {
    let positionY;
    switch (event.code) {
        case 'ArrowUp':
            positionY = this.getPositionY(this.personY - this.step)
            this.person.style.top = positionY + 'px';
            this.personY = positionY;
            break
        case 'ArrowDown':
            positionY = this.getPositionY(this.personY + this.step)
            this.person.style.top = positionY + 'px';
            this.personY = positionY;
            break
        default:
            break
    }
}

MakePerson.prototype.specialMove = function (event) {
    const person = this;
    switch (event.code) {
        case 'Space':
            if (event.repeat == false) {
                this.person.style.top = this.personY - this.jumpHeight + 'px';
                document.onkeydown = this.moveXAxis.bind(person);
                setTimeout(() => this.person.style.top = this.personY + 'px', 300);
                setTimeout(() => document.onkeydown = this.keyDown.bind(person), 400);
            }
            break;
        case 'KeyZ':
            this.person.setAttribute('src', 'img/batman_seat.png');
            document.onkeydown = this.moveXAxis.bind(person);
            break;
        default:
            break;
    }
}

const batman = new MakePerson(100, 50);

batman.move(batman);
