const fs = require('fs');
const https = require('https');
const express = require("express");
const WebSocket = require("ws");

const app = express();
app.use((req,res)=>{
    res.send("jfkds");
})

var server = https.createServer(
    {
      'key':fs.readFileSync('ssl.key'),
      'cert':fs.readFileSync('ssl.crt')
    },
    app
);

const wss = new WebSocket.Server({
    server
});
wss.on("connection",(ws)=>{
    ws.on("message",(data)=>{
        ws.send(data);
    })
})

server.listen(3000)