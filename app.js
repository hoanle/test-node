const express = require('express');
const path = require('path');
const app = express();
const https = require('https');
const fs = require('fs');

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  console.log('get /');
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.set('port', 9000);
const server = https.createServer({
    key: fs.readFileSync(path.join(__dirname, "./localhost-key.pem")),
    cert: fs.readFileSync(path.join(__dirname, "./localhost.pem"))
  }, app);


server.listen(9000);
server.on('error', onError);
server.on('listening',  onListening);

console.log("aa");

function onError(error) {
  console.log("error");
}

function onListening() {
  console.log("listening")
}
