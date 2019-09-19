import io from "socket.io-client";
import $ from "jquery"

const socket = io("ws://127.0.0.1:3000");

// 创建并获取消息
socket.on("recv",(data)=>{
    if(data["other"]){
        $("#message").append("<div class='me'>"+data["other"]+"<div>")
    }
    if(data["min"]) {
        $("#message").append("<div class='other'>"+data["min"]+"<div>");
    }
})

$("#send").click(function(){
    const item = {
        other: $("input").val()
    }
    socket.emit("send", item);
    $("input").val("");
})