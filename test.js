const fs = require("fs");
fs.readFile("C:/Temp/read.txt", "utf-8", (err, data) => {
    if (err) return console.log(err);
    console.log(data);
});
