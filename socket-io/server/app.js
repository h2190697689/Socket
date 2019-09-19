const app = require("express")();
const server = require("http").Server(app);
const io = require("socket.io")(server);

app.get("/",(req,res)=>{
	res.send("<h1>min de socket</h1>")
})
io.on("connection",(socket)=>{
	console.log("socket is connection-----------------");
	socket.on("error",()=>{
		console.log("socket is error");
	})
	socket.on("disconnect",()=>{
		console.log("socket is disconnect");
	})
	socket.on("send",(data)=>{
		console.log(data);
		io.emit("recv",data);
	})
})

server.listen(3000,()=>{
	console.log("server is  running on port 3000");
})