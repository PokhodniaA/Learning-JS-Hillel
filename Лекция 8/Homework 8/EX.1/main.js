function convert(obj, newObj) {
    newObj = newObj || {};
    for (let key in obj) {
        (typeof (obj[key]) == 'object') ? convert(obj[key], newObj) :
            newObj[key] = obj[key];
    }

    return newObj
}



obj = {
    a: 10,
    b: 12,
    c: {
        f: 13
    }
}

newObj = convert(obj)
console.log(newObj);