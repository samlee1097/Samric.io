import React, {useState} from 'react';

import GameRoom from "./Components/GameRoom/GameRoom";
import HomeRoom from "./Components/HomeRoom/HomeRoom"
import PrivateRoom from "./Components/PrivateRoom/PrivateRoom";

function App() { 
  const [room, setRoom] = useState("home");
  const [gameId, setGameId] = useState(null);
  const [userId, setId] = useState(null);

  return (
    room === "home" ? <HomeRoom setRoom={setRoom} setGameId={setGameId} setId={setId}/> : room === "game" ? <GameRoom setRoom={setRoom}/> : <PrivateRoom setRoom={setRoom} gameId={gameId} userId={userId}/>
  );
}

export default App;
