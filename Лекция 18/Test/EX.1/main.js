function getinterest(initial, interest, years) {
    return Math.round(+initial * (1 + +interest * +years));
}

function changeResult() {
    let payment = getinterest(initial.value, interest.value / 100, year.value);
    will.innerHTML = `will <br> ${payment}`;
    greenblock.style.height = payment / 100 + 'px';
}

let initial = document.querySelector('#initial'),
    year = document.querySelector('#year'),
    interest = document.querySelector('#interest'),
    was = document.querySelector('.was'),
    will = document.querySelector('.will'),
    redblock = document.querySelector('.redblock'),
    greenblock = document.querySelector('.greenblock');

initial.onchange = function () {
    was.innerHTML = `was <br> ${initial.value}`;
}
interest.onchange = changeResult;
year.onchange = changeResult;

was.innerHTML = `was <br> ${initial.value}`;
changeResult();