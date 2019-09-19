const http = require("http");
const WebSocket = require("ws");

const app = http.createServer((req,res)=>{
    res.write("hello");
    res.end("ending");
})

const wss = new WebSocket.Server({
    server: app
})
wss.on("connection",(ws)=>{
    ws.on("message",(data)=>{
        console.log("信息内容为： "+ data);
        ws.send(data);
    })
})

