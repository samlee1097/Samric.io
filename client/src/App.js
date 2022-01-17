import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, {useState} from 'react';

import GameRoom from "./Components/GameRoom/GameRoom";
import HomeRoom from "./Components/HomeRoom/HomeRoom"
import PrivateRoom from "./Components/PrivateRoom/PrivateRoom";

function App() { 
  const [username, setUsername] = useState("");
  const [drawTime, setDrawTime] = useState(0);
  const [rounds, setRounds] = useState(0)

   console.log("Sam, check this out!");

  return (
      <Router>
        <Routes> 
            <Route path="/" element={<HomeRoom setUsername={setUsername}/>}/>
            <Route path="gameroom" element={<GameRoom username={username} drawTime={drawTime} rounds={rounds}/>}/>
            <Route path="privateroom" element={<PrivateRoom username={username} setDrawTime={setDrawTime} setRounds={setRounds}/>}/>
        </Routes>
    </Router>
  );
}

export default App;
