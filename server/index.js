const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

let userList = {};

io.on("connection", (socket) => {
  
  socket.on("join_private_room", (data) => {
  
    if(userList[data.gameId] === undefined){
      userList[data.gameId] = data;
    } else {
      userList[data.gameId].push(data)
    }

    socket.join(data.gameId);
    socket.to(data.gameId).emit('display_user', userList[data.gameId]);
  });


  socket.on("remove_user", (data) => {
    if(userList[data.gameId]){ 
      const index = userList[data.gameId].findIndex(user => user.socketId === data.socketId);

      if(index !== -1){
        userList[data.gameId].splice(index, 1);
        console.log("removed user")
      }
      socket.to(data.gameId).emit("filter_users", userList[data.gameId]);
    }
  })

  socket.on("send_message", (data) => {
    socket.to(data.gameId).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

server.listen(3001, () => {
  console.log("SERVER RUNNING");
});