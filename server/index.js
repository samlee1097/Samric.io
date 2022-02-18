const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
const PORT = process.env.PORT || 3001;
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

app.get('/', (req, res) => {
  res
      .json({ message: 'Welcome' })
      .status(200)
      .end()
});

let userList={};

io.on("connection", (socket) => {
  
  socket.on("join_private_room", (data) => {
    socket.join(data.gameId);  

    if (!userList[data.gameId] || userList[data.gameId].length === 0){
      userList[data.gameId] = [{...data, owner: true}];
    } else {
      userList[data.gameId].push(data);
    }
 
    io.to(data.gameId).emit('display_user', userList[data.gameId]);
  });

  socket.on("send_message", (data) => {    
    socket.to(data.gameId).emit("receive_message", data);
  });

  socket.on("user_leaves", (data) => {
    socket.leave(data.gameId);
    userList[data.gameId] = userList[data.gameId]?.filter((user) => user.socketId !== socket.id);

    io.to(data.gameId).emit('display_user', userList[data.gameId]);
  })

  let userDisconnectList;

  socket.on("disconnecting", ()=> {
    userDisconnectList = socket.rooms;
  })

  socket.on("disconnect", () => {
    const roomName = Array.from(userDisconnectList.keys())[1];
    userList[roomName] = userList[roomName]?.filter((user) => user.socketId !== socket.id);

    io.to(roomName).emit('display_user', userList[roomName]);
    console.log("User Disconnected", socket.id);
  });
});

server.listen(PORT, () => {
  console.log("SERVER RUNNING");
});