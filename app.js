const express = require('express')
const path = require('path')
const https = require('https')
const fs = require('fs')
const WebSocket = require('ws')

const app = express()
app.use(express.static(path.join(__dirname, 'build')))

app.get('/', (req, res) => {
  const wss = new WebSocket.Server({ server, rejectUnauthorized: false })
  wss.on('connection', (ws) => {
    console.log('Connected!')
    ws.on('message', (message) => {
      console.log('Message: ', message)
    })
  })

  res.redirect(`/sensr`)
})

app.get('/sensr', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.set('port', 9000)
const server = https.createServer(
  {
    key: fs.readFileSync(path.join(__dirname, './sensr-ca.key')),
    cert: fs.readFileSync(path.join(__dirname, './sensr-ca.crt')),
  },
  app
)

server.listen(9000)
server.on('error', (error) => console.log('error', error))
server.on('listening', () => console.log('listening'))
