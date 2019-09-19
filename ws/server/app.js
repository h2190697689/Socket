const WebSocket = require("ws");
const wss = new WebSocket({
    port: 3000
})

wss.on("connection",(ws)=>{
    ws.on("message",(data)=>{
        ws.send(data);
    })
})

console.log("ws server started at port 3000...");