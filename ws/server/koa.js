const Koa = require("koa");
const http = require("http");
const WebSocket = require("ws");
const app = new Koa();

app.use((ctx,next)=>{
    ctx.body = "fjdk"
})

const server = http.createServer(app.callback());

const wws = new WebSocket.Server({
    server
})
wws.on("connection",(socket)=>{
    socket.on("message",(data)=>{
        socket.send(data);
    })
})

server.listen(3000,()=>{
    console.log("server is runnig on port 3000");
})
