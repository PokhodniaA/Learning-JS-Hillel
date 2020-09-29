var obj = {
    m1: function () {
        console.log('m1');
        return this
    },

    m2: function () {
        console.log('m2');
        return this
    },

    m3: function () {
        console.log('m3');
        return this
    },
}

obj.m1().m2().m3();
obj.m2().m1().m3();
obj.m2().m1().m3().m1().m1();