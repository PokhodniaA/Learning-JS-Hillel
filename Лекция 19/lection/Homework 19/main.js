function moveXAxis(event) {
    let personX = parseInt(computedStylePerson.left);
    switch (event.code) {
        case 'ArrowRight':
            person.style.left = personX + step + 'px';
            break
        case 'ArrowLeft':
            person.style.left = personX - step + 'px';
            break
    }
}

function moveYAxis(event) {
    let personY = parseInt(computedStylePerson.top);
    switch (event.code) {
        case 'Space':
            if (event.repeat == false) {
                person.style.top = personY - jumpHeight + 'px';
                setTimeout(() => { person.style.top = personY + 'px'; }, 500);
            }
            break;
        case 'KeyZ':
            person.style.width = defaultWidth * 1.15 + 'px';
            person.style.height = defaultHeight * 0.6 + 'px';
            body.onkeydown = moveXAxis;
            break;
    }
}

function keyDown(event) {
    moveXAxis(event);
    moveYAxis(event)
}

function keyUp(event) {
    switch (event.code) {
        case 'KeyZ':
            person.style.width = defaultWidth + 'px';
            person.style.height = defaultHeight + 'px';
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
