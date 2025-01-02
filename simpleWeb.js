const http = require('http');

http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url == '/echo?msg=hello') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end("hello");
  }

  res.end(req.url + " World \n\n");

}).listen(7777);

