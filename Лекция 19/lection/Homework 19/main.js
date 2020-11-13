function getPositionX(coordinateX) {
    let windowWidth = window.innerWidth;
    if (coordinateX < 0) {
        return 0
    } else if (coordinateX > windowWidth - defaultWidth) {
        return windowWidth - defaultWidth;
    } else {
        return coordinateX
    }
}

function getPositionY(coordinateY) {
    let windowHeight = window.innerHeight;
    if (coordinateY < defaultHeight) {
        return defaultHeight;
    } else if (coordinateY > windowHeight) {
        return windowHeight;
    } else {
        return coordinateY
    }
}

function moveXAxis(event) {
    switch (event.code) {
        case 'ArrowRight':
            person.style.left = getPositionX(parseInt(computedStylePerson.left) + step) + 'px';
            break
        case 'ArrowLeft':
            person.style.left = getPositionX(parseInt(computedStylePerson.left) - step) + 'px';
            break
        default:
            break;
    }
}

function moveYAxis(event) {
    switch (event.code) {
        case 'ArrowUp':
            person.style.top = getPositionY(parseInt(computedStylePerson.top) - step) + 'px';
            break
        case 'ArrowDown':
            person.style.top = getPositionY(parseInt(computedStylePerson.top) + step) + 'px';
            break
        case 'Space': // (*FIXED*)Bug: При многократном нажатии на пробел меня позици Y.
            if (event.repeat == false) {
                let personY = parseInt(computedStylePerson.top);
                person.style.top = personY - jumpHeight + 'px';
                body.onkeydown = moveXAxis
                setTimeout(() => {
                    person.style.top = personY + 'px';
                    setTimeout(() => {
                        body.onkeydown = keyDown;
                    }, 400);
                }, 300);
            }
            break;
        case 'KeyZ':
            // person.style.width = defaultWidth * 1.15 + 'px';
            // person.style.height = defaultHeight * 0.6 + 'px';
            person.setAttribute('src', 'img/batman_seat.png');
            body.onkeydown = moveXAxis;
            break;
        default:
            break;
    }
}

function keyDown(event) {
    moveXAxis(event);
    moveYAxis(event);
    console.log(event.code);
}

function keyUp(event) {
    switch (event.code) {
        case 'KeyZ':
            // person.style.width = defaultWidth + 'px';
            // person.style.height = defaultHeight + 'px';
            person.setAttribute('src', 'img/batman.png');
            body.onkeydown = keyDown;
            break;
        default:
            break;
    }
}


let person = document.querySelector('#person'),
    body = document.querySelector('body'),
    computedStylePerson = getComputedStyle(person),
    defaultWidth = person.clientWidth,
    defaultHeight = person.clientHeight,
    jumpHeight = 100,
    step = 50;



body.onkeydown = keyDown;
body.onkeyup = keyUp;


// Cписок задач:

// 1.Пофиксить прыжок(!Done!)
// 2. Ограничить размеры экрана(!Done!)
// 3 переделать при помощи классов