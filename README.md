# Socket  数据双向传输

# 创建(客户端)
var Socket = new WebSocket(url,[protocol]);

## Socket对象
### Socket.readyState
- 0 - 表示连接尚未建立。
- 1 - 表示连接已建立，可以进行通信。
- 2 - 表示连接正在进行关闭。
- 3 - 表示连接已经关闭或者连接不能打开。

## 事件监听
### Socket.onopen  
- 连接建立时触发

### Socket.onmessage  
- 客户端接收服务端数据时触发

### Socket.onerror 
- 通信发生错误时触发

### Socket.onclose  
- 连接关闭时触发

## 事件 
### Socket.send() 
- 使用连接发送数据 

### Socket.close() 
- 关闭连接


# server服务端(代码)

## socket-io 
- 服务端 socket-io 库
- 客户端 socket-io-client 库

## ws
- 服务端 
1. app.js (简单的socket服务器)
2. http.js (原生http模块创建server并结合socket);
3. express.js (express框架创建server并结合socket);
4. koa.js  (koa2框架创建server并结合socket);

- 客户端(html5原生支持的WebSocket);
