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

const port = 3004;
app.listen(port, function () {
    console.log(`Example app listening on port http://localhost:${port}/`);
});

function random(max, min) {
    return Math.round(Math.random() * (max - min) + min);
}

app.get("/", function (req, responce) {
    let value = random(10, 50);
    if (value > 20) {
        responce.status(200).send({
            succes: 'ok',
            value
        })
    } else {
        responce.status(401).send({
            succes: 'error',
            value
        })
    }
})
