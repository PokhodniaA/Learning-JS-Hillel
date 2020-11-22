var express = require("express");
var fs = require("fs");
var app = express();
var bodyParser = require("body-parser");

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


let data = {
    a: 0,
    b: true,
    c: '2',
    d() {
        console.log('Hello,World!');
    },
}

app.get("/get-user-info", function (req, responce) {
    responce.status(200);
    responce.send(JSON.stringify(data));
})
