import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { io } from 'socket.io-client';
import GameRoom from "./Components/GameRoom/GameRoom";
import HomeRoom from "./Components/HomeRoom/HomeRoom"

const socket = io.connect("http://localhost:3001");

function App() { 
  
  const [room, setRoom] = useState("home");
  const gameId = useSelector(state => state.user.value.gameId);
  const username = useSelector(state => state.user.value.username);
  const [userList, setUserList] = useState([]);
  const [socketId, setSocketId] = useState(socket.id);
  
  return (
    room === "home" ? <HomeRoom setRoom={setRoom} socket={socket} socketId={socketId} setUserList={setUserList}/> : <GameRoom userList={userList} gameId={gameId} setRoom={setRoom} username={username} setSocketId={setSocketId} gameId={gameId} socket={socket} setUserList={setUserList}/>
  );
}

export default App;
