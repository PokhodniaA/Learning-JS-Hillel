function mult() {
    multElemets = 1;
    for (i = 0; i < arguments.length; i++) {
        multElemets *= arguments[i]
    }
    return multElemets;
}

firstTest = mult(1, 2, 3, 4, 10);
console.log(firstTest);

secondTest = mult(10, 15, 15);
console.log(secondTest);
