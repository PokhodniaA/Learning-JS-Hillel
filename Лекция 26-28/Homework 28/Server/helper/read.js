
var fs = require("fs");

module.exports = {
    read(url, callback) {
        fs.readFile(url, "utf-8", callback);
    }
}