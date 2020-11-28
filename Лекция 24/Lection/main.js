var a = 5;
function test() {
    debugger
    if (a) {
        let a = 10;
        return console.log(a);
    }
    console.log(a);
}
test();