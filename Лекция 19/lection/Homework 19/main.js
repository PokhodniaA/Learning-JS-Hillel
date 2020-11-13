// function getPositionX(coordinateX) {
//     let windowWidth = window.innerWidth;
//     if (coordinateX < 0) {
//         return 0
//     } else if (coordinateX > windowWidth - defaultWidth) {
//         return windowWidth - defaultWidth;
//     } else {
//         return coordinateX
//     }
// }

// function getPositionY(coordinateY) {
//     let windowHeight = window.innerHeight;
//     if (coordinateY < defaultHeight) {
//         return defaultHeight;
//     } else if (coordinateY > windowHeight) {
//         return windowHeight;
//     } else {
//         return coordinateY
//     }
// }

// function moveXAxis(event) {
//     switch (event.code) {
//         case 'ArrowRight':
//             person.style.left = getPositionX(parseInt(computedStylePerson.left) + step) + 'px';
//             break
//         case 'ArrowLeft':
//             person.style.left = getPositionX(parseInt(computedStylePerson.left) - step) + 'px';
//             break
//         default:
//             break;
//     }
// }

// function moveYAxis(event) {
//     switch (event.code) {
//         case 'ArrowUp':
//             person.style.top = getPositionY(parseInt(computedStylePerson.top) - step) + 'px';
//             break
//         case 'ArrowDown':
//             person.style.top = getPositionY(parseInt(computedStylePerson.top) + step) + 'px';
//             break
//         case 'Space': // (*FIXED*)Bug: При многократном нажатии на пробел меняет позицию Y.
//             if (event.repeat == false) {
//                 let personY = parseInt(computedStylePerson.top);
//                 person.style.top = personY - jumpHeight + 'px';
//                 body.onkeydown = moveXAxis
//                 setTimeout(() => {
//                     person.style.top = personY + 'px';
//                     setTimeout(() => {
//                         body.onkeydown = keyDown;
//                     }, 400);
//                 }, 300);
//             }
//             break;
//         case 'KeyZ':
//             // person.style.width = defaultWidth * 1.15 + 'px';
//             // person.style.height = defaultHeight * 0.6 + 'px';
//             person.setAttribute('src', 'img/batman_seat.png');
//             body.onkeydown = moveXAxis;
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
//             body.onkeydown = keyDown;
//             break;
//         default:
//             break;
//     }
// }


// let person = document.querySelector('#person'),
//     body = document.querySelector('body'),
//     computedStylePerson = getComputedStyle(person),
//     defaultWidth = person.clientWidth,
//     defaultHeight = person.clientHeight,
//     jumpHeight = 100,
//     step = 50;



// body.onkeydown = keyDown;
// body.onkeyup = keyUp;


// -------------------------------------------------
// ------------------------------------------------
function Person(element) {
    this.person = element;
    this.computedStylePerson = getComputedStyle(person);
    this.defaultWidth = person.clientWidth;
    this.defaultHeight = person.clientHeight;
}

Person.getPositionX = function (coordinateX) {
    let windowWidth = window.innerWidth;
    if (coordinateX < 0) {
        return 0
    } else if (coordinateX > windowWidth - this.defaultWidth) {
        return windowWidth - this.defaultWidth;
    } else {
        return coordinateX
    }
}

Person.getPositionY = function (coordinateY) {
    let windowHeight = window.innerHeight;
    if (coordinateY < this.defaultHeight) {
        return this.defaultHeight;
    } else if (coordinateY > windowHeight) {
        return windowHeight;
    } else {
        return coordinateY
    }
}

Person.prototype.moveXAxis = function (event) {
    let leftCoordinate = parseInt(this.computedStylePerson.left)
    switch (event.code) {
        case 'ArrowRight':
            this.person.style.left = Person.getPositionX(leftCoordinate + step) + 'px';
            break
        case 'ArrowLeft':
            this.person.style.left = Person.getPositionX(leftCoordinate - step) + 'px';
            break
        default:
            break;
    }
}

Person.prototype.moveYAxis = function (event) {
    switch (event.code) {
        case 'ArrowUp':
            this.person.style.top = Person.getPositionY(parseInt(this.computedStylePerson.top) - step) + 'px';
            break
        case 'ArrowDown':
            this.person.style.top = Person.getPositionY(parseInt(this.computedStylePerson.top) + step) + 'px';
            break
        case 'Space':
            if (event.repeat == false) {
                let personY = parseInt(this.computedStylePerson.top);
                this.person.style.top = personY - jumpHeight + 'px';
                body.onkeydown = this.moveXAxis.bind(this.name);
                setTimeout(() => {
                    this.person.style.top = personY + 'px';
                    setTimeout(() => {
                        body.onkeydown = this.keyDown.bind(this.name);
                    }, 400);
                }, 300);
            }
            break;
        case 'KeyZ':
            this.person.setAttribute('src', 'img/batman_seat.png');
            body.onkeydown = this.moveXAxis.bind(this.name);
            break;
        default:
            break;
    }
}

Person.prototype.keyDown = function (event) {
    if (!this.name) { this.name = this }
    this.moveXAxis(event);
    this.moveYAxis(event);
}

Person.prototype.keyUp = function (event) {
    switch (event.code) {
        case 'KeyZ':
            this.person.setAttribute('src', 'img/batman.png');
            body.onkeydown = this.keyDown.bind(this.name);
            break;
        default:
            break;
    }
}


const body = document.querySelector('body'),
    person = document.querySelector('#person'),
    jumpHeight = 100,
    step = 50;

const batman = new Person(person);

body.onkeydown = batman.keyDown.bind(batman);
body.onkeyup = batman.keyUp.bind(batman);