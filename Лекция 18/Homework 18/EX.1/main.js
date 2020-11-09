function getCommission(value) {
    if (value < 20) {
        return value * 0.02;
    } else if (value >= 20 && value < 50) {
        return value * 0.04;
    } else if (value >= 50 && value < 75) {
        return value * 0.06;
    } else if (value >= 75 && value <= 100) {
        return value * 0.08;
    }
}

function changeDiagram() {
    let value = slider.value,
        comission = getCommission(value);
    diagramGreen.style.height = `${value * 2}px`
    diagramRed.style.height = `${comission * 2}px`
}


let slider = document.querySelector('#range'),
    number = document.querySelector('#number'),
    diagramGreen = document.querySelector('#green'),
    diagramRed = document.querySelector('#red');

changeDiagram()

slider.oninput = function () {
    number.value = slider.value;
    changeDiagram()
}

number.oninput = function () {
    slider.value = number.value;
    changeDiagram()
}