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


// --------------------------------------------
// --------------------------------------------

// function getPositionX(coordinateX) {
//     const windowWidth = window.innerWidth;
//     if (coordinateX < 0) {
//         return 0
//     } else if (coordinateX > windowWidth - defaultWidth) {
//         return windowWidth - defaultWidth;
//     } else {
//         return coordinateX
//     }
// }

// function getPositionY(coordinateY) {
//     const windowHeight = window.innerHeight;
//     if (coordinateY < defaultHeight) {
//         return defaultHeight;
//     } else if (coordinateY > windowHeight) {
//         return windowHeight;
//     } else {
//         return coordinateY
//     }
// }

// function moveXAxis(event) {
//     const personX = parseInt(computedStylePerson.left);
//     switch (event.code) {
//         case 'ArrowRight':
//             person.style.left = getPositionX(personX + step) + 'px';
//             break
//         case 'ArrowLeft':
//             person.style.left = getPositionX(personX - step) + 'px';
//             break
//         default:
//             break;
//     }
// }

// function moveYAxis(event) {
//     let positionY;
//     switch (event.code) {
//         case 'ArrowUp':
//             positionY = getPositionY(personY - step)
//             person.style.top = positionY + 'px';
//             personY = positionY;
//             break
//         case 'ArrowDown':
//             positionY = getPositionY(personY + step)
//             person.style.top = positionY + 'px';
//             personY = positionY;
//             break
//         case 'Space':
//             if (event.repeat == false) {
//                 person.style.top = personY - jumpHeight + 'px';
//                 document.onkeydown = moveXAxis
//                 setTimeout(() => person.style.top = personY + 'px', 300);

//                 setTimeout(() => document.onkeydown = keyDown, 400);
//             }
//             break;
//         case 'KeyZ':
//             // person.style.width = defaultWidth * 1.15 + 'px';
//             // person.style.height = defaultHeight * 0.6 + 'px';
//             person.setAttribute('src', 'img/batman_seat.png');
//             document.onkeydown = moveXAxis;
//             break;
//         default:
//             break;
//     }
// }

// function keyDown(event) {
//     moveXAxis(event);
//     moveYAxis(event);
//     console.log(event.code);
// }

// function keyUp(event) {
//     switch (event.code) {
//         case 'KeyZ':
//             // person.style.width = defaultWidth + 'px';
//             // person.style.height = defaultHeight + 'px';
//             person.setAttribute('src', 'img/batman.png');
//             document.onkeydown = keyDown;
//             break;
//         default:
//             break;
//     }
// }


// const person = document.querySelector('#person'),
//     computedStylePerson = getComputedStyle(person),
//     defaultWidth = person.clientWidth,
//     defaultHeight = person.clientHeight,
//     jumpHeight = 100,
//     step = 50;

// let personY = parseInt(computedStylePerson.top);

// document.onkeydown = keyDown;
// document.onkeyup = keyUp;
