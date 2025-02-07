
import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port : 8080});


//event handler
//jb v ws pe new connection aaye sent it to the socket(i.e send into the  function)
//socket is nothing but just a connection for the websockets
wss.on("connection",function(socket){
    console.log("User Connected ");
    socket.send("hii you are connected to the wb server");
})