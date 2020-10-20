function greeting(who) {
    console.log(this[who].say);
}

obj = {
    anonim: { say: 'Hello anonim' },
    user: { say: 'Hello user' },
    admin: { say: 'Hello admin' }
}

greeting.call(obj, 'anonim');
greeting.call(obj, 'user');
greeting.call(obj, 'admin');