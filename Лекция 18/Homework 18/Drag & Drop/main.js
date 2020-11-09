function getPosition(event) {
    let xAxis = event.clientX - widthElement / 2,
        yAxis = event.clientY - heightElement / 2,
        windowWidth = window.innerWidth,
        windowHeight = window.innerHeight,
        X, Y;

    if (xAxis < 0) {
        X = 0
    } else if (xAxis > windowWidth - widthElement) {
        X = windowWidth - widthElement;
    } else {
        X = xAxis
    }

    if (yAxis < 0) {
        Y = 0
    } else if (yAxis > windowHeight - heightElement) {
        Y = windowHeight - heightElement;
    } else {
        Y = yAxis
    }

    return [X, Y]
}

const element = document.querySelector('.box'),
    widthElement = element.clientWidth,
    heightElement = element.clientWidth;


// document.onclick = function (event) {
//     let [X, Y] = getPosition(event);
//     console.log(X, 'left'), console.log(Y, 'top');
//     element.style.top = Y + 'px';
//     element.style.left = X + 'px';
// }

element.onmousedown = function () {
    document.onmousemove = function (event) {
        let [X, Y] = getPosition(event);
        element.style.top = Y + 'px';
        element.style.left = X + 'px';
    }
}

element.onmouseup = function () {
    document.onmousemove = null;
}