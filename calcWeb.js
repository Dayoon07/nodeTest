let express = require("express");
const fs = require("fs");

let app = express();
app.listen(8888);
console.log("Running...");

app.get("/", (req, res) => {
    res.send("Hello World");
});
app.get("/hi", (req, res) => {
    res.send("hi World");
});
app.get("/hello", (req, res) => {
    res.send("Hello World");
});
app.get("/echo", (req, res) => {
    res.send(req.query.msg);
});
app.get("/save", (req, res) => {
    res.send(req.query.data);
    console.log(req.query.data);
    fs.writeFileSync("C:/Temp/Examread.txt", req.query.data, "utf-8");
});
app.get("/read", (req, res) => {
    let d = fs.readFileSync("C:/Temp/Examread.txt", "utf-8");
    console.log(d);
    res.send(d);
});
app.get("/google", (req, res) => {
    res.send(fs.readFileSync("C:/Temp/google.html", "utf-8"));
});

app.use('/calc', express.static(__dirname + '/public'));

app.get("/add", (req, res) => {
    var p1 = req.query.p1;
    var p2 = req.query.p2;
    
    var result = Number(p1) + Number(p2);
    res.send(result.toString());
});

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(bodyParser.text());

// curl http://localhost:8888/calculator -X POST -d "1+2" -H "Content-Type: text/plain"
app.post("/calculator", (req, res) => {
    var data = req.body;
    var result = eval(data);
    res.send(String(result));
});


  