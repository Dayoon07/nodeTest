const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

let app = express();
app.listen(8888);
console.log("돌아가는 중")

app.get("/", (req, res) => {
    res.send("Hello Upload"); 
});

app.use('/public', express.static(__dirname + '/public'));

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(bodyParser.text());

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,'./public') // cb 콜백함수를 통해 전송된 파일 저장 디렉토리 설정
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname) // cb 콜백함수를 통해 전송된 파일 이름 설정
    }
  });

const upload = multer({storage: storage})

app.post("/upload", upload.single('file'), function(req, res) {
    res.send(req.file.originalname);
    console.log(req.file);
});