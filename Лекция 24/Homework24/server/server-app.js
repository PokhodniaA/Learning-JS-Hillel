var express = require("express");
var fs = require("fs");
var app = express();
var bodyParser = require("body-parser");
const { response } = require("express");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/json" }));

app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    res.setHeader(
        "Access-Control-Allow-Headers",
        "X-Requested-With,content-type"
    );
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
});

const port = 3003;
app.listen(port, function () {
    console.log(`Example app listening on port http://localhost:${port}/`);
});

function read(url, callback) {
    fs.readFile(url, "utf-8", callback);
}

function verifyUsers({ login, password }, response) {
    read('./users.json', (error, data) => {
        const newData = JSON.parse(data);
        const verifiedUser = newData.filter((user) => {
            if (login == user.login && password == user.password) {
                return user
            }
        });
        const user = verifiedUser[0];
        if (typeof user == 'object') {
            response.status(200).send(user);
        } else {
            response.status(401).send({});
        }
    })
}

app.post("/", function (req, response) {
    console.log(req.body, 'Req.Body');
    verifyUsers(JSON.parse(req.body), response);
})



function getGoods(id, response) {
    const url = `./goods/${id}.json`
    read(url, (error, data) => {
        response.status(200).send(data);
    })
}

app.post("/goods", function (req, response) {
    console.log(req.body, 'Req.Body.goods');
    getGoods(+req.body, response);

})
