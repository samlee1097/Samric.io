import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import { io } from 'socket.io-client';
import GameRoom from "./Components/GameRoom/GameRoom";
import HomeRoom from "./Components/HomeRoom/HomeRoom"
import PrivateRoom from "./Components/PrivateRoom/PrivateRoom";

const socket = io.connect("http://localhost:3001");

function App() { 

  const [room, setRoom] = useState("home");
  const gameId = useSelector(state => state.user.value.gameId);
  const username = useSelector(state => state.user.value.username);
  const [userList, setUserList] = useState([]);
  const socketId = socket.id;

  console.log(userList)

  useEffect(()=> {
      socket.on("remove_user", (data) => {
        setUserList(list => list.filter(user => user.socketId !== data));
      });
  }, [socket])

  return (
    room === "home" ? <HomeRoom setRoom={setRoom} socket={socket} socketId={socketId} setUserList={setUserList}/> : room === "game" ? <GameRoom setRoom={setRoom} username={username} gameId={gameId} socket={socket}/> : <PrivateRoom setUserList={setUserList} socket={socket} userList={userList} setRoom={setRoom} gameId={gameId} username={username} socketId={socketId} setUserList={setUserList}/>
  );
}

export default App;
