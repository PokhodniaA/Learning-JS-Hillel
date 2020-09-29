function multiplyNumeric(obj) {
    for (let key in obj) {
        element = obj[key]
        if (typeof(element) == 'number') {
            obj[key] *= 2;
        }
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

console.log(menu);

multiplyNumeric(menu);

console.log(menu);