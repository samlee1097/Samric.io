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

io.on("connection", (socket) => {
  
  socket.on("join_private_room", (data) => {
    socket.join(data);
    var clients = io.sockets.clients();
    socket.emit('getCount', clients)
  });

  socket.on("display_new_user", (data) => {
    socket.to(data.gameId).emit("broadcast", data);
  })

  socket.on("remove_user", (data) => {
    socket.to(data.gameId).emit("filter_users", data.socketId);
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