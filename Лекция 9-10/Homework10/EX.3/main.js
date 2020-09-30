function inArray(text, array) {
    for(var str of array){
        if(str.includes(text)){
            return true
        }
    }
    return false
}

var arr = ['sjhfnaof', 'affooasf', 'dfhdfhdfh'];
var text1 = 'foo';
var text2 = 'swjh';

console.log(inArray(text1, arr));
console.log(inArray(text2, arr));

