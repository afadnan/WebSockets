"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
//event handler
//jb v ws pe new connection aaye sent it to the socket(i.e send into the  function)
//socket is nothing but just a connection for the websockets
wss.on("connection", function (socket) {
    console.log("User Connected ");
    socket.send("hii you are connected to the ping pong WebSocket Server");
    socket.on('message', function message(text) {
        const clientText = text.toString();
        const wbText = "pong";
        console.log(clientText);
        console.log(wbText);
        if (clientText == "ping") {
            return socket.send("pong");
        }
        else {
            return socket.send("Please Send 'ping' Messages");
        }
    });
});
