const express = require('express');
const path = require('path');
const app = express();
const https = require('https');
const http = require('http');
const fs = require('fs');
const ssl = false

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  console.log('get /');
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.set('port', 9000);

var server;

if (ssl) {
  server = https.createServer({
      key: fs.readFileSync(path.join(__dirname, "./localhost-key.pem")),
      cert: fs.readFileSync(path.join(__dirname, "./localhost.pem"))
    }, app);
} else {
  server = https.createServer(app);
}

server.listen(9000);
server.on('error', onError);
server.on('listening',  onListening);

function onError(error) {
  console.log("error");
}

function onListening() {
  console.log("listening")
}
