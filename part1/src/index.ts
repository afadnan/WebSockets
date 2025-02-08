
import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port : 8080});



wss.on("connection",function(socket){
    console.log("User Connected ");
    socket.send("hii you are connected to the ping pong WebSocket Server");
    
    socket.on('message', function message(text) {
        const clientText = text.toString();
        const wbText = "pong";
        console.log(clientText);
        console.log(wbText);

        if(clientText == "ping"){
            return socket.send("pong");
        }else{
            return socket.send("Please Send 'ping' Messages");
        }
})
})