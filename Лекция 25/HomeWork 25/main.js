const promise = new Promise((res, rej) => {
    const bool = false;
    console.log(0);
    (bool) ? res(bool) : rej(bool);
})

promise
    .then(
        (res) => {
            console.log(1);
            return res
        },
        (rej) => {
            console.log(2);
            return rej
        }
    )
    .then(
        (res) => {
            console.log(3);
            return Promise.reject(res);
        },
        (rej) => {
            console.log(4);
            return rej
        }
    )
    .then(
        (res) => {
            console.log(5);
            return res
        },
        (rej) => {
            console.log(6);
            if (rej) {
                return Promise.reject(rej);
            }
        }
    )
    .then(
        (res) => {
            console.log(7);
            return res
        },
        (rej) => {
            console.log(8);
            return rej
        }
    )
    .then(
        (res) => {
            console.log(9);
            return Promise.reject(res)
        },
        (rej) => {
            console.log(10);
            return rej
        }
    )
    .then(
        (res) => { console.log(11) },
        (rej) => { console.log(12) }
    )