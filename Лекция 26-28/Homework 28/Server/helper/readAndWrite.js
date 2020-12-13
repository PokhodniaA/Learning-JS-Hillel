
var fs = require("fs");

module.exports = {
    read(url, callback) {
        fs.readFile(url, "utf-8", callback);
    },

    write(url, data) {
        data = JSON.stringify(data); // без ещё одной  stringify не работет
        fs.writeFile(url, data, (err) => {
            if (err) throw err;
            console.log("The file has been saved!");
        });
    }
}