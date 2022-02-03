import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { io } from 'socket.io-client';
import GameRoom from "./Components/GameRoom/GameRoom";
import HomeRoom from "./Components/HomeRoom/HomeRoom"
import PrivateRoom from "./Components/PrivateRoom/PrivateRoom";

function App() { 
  const socket = io.connect("http://localhost:3001");

  const [room, setRoom] = useState("home");
  const gameId = useSelector(state => state.user.value.gameId);
  const username = useSelector(state => state.user.value.username);
  const [userList, setUserList] = useState([]);
  const [socketId, setSocketId] = useState('');

  return (
    room === "home" ? <HomeRoom setRoom={setRoom} socket={socket} setSocketId={setSocketId} socketId={socketId} setUserList={setUserList} /> : room === "game" ? <GameRoom setRoom={setRoom} username={username} gameId={gameId} socket={socket}/> : <PrivateRoom setUserList={setUserList} socket={socket} userList={userList} setRoom={setRoom} gameId={gameId} username={username} socketId={socketId}/>
  );
}

export default App;
