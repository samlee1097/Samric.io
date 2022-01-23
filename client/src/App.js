import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, {useState} from 'react';

import GameRoom from "./Components/GameRoom/GameRoom";
import HomeRoom from "./Components/HomeRoom/HomeRoom"
import PrivateRoom from "./Components/PrivateRoom/PrivateRoom";

function App() { 
  const [username, setUsername] = useState("");

  return (
      <Router>
        <Routes> 
            <Route path="/" element={<HomeRoom setUsername={setUsername}/>}/>
            <Route path="gameroom" element={<GameRoom username={username}/>}/>
            <Route path="privateroom" element={<PrivateRoom username={username} setSettings={setSettings}/>}/>
        </Routes>
    </Router>
  );
}

export default App;
