import React, {useState} from 'react';

import ToolBox from './Canvas/ToolBox';
import DrawingCanvas from './Canvas/DrawingCanvas'
import ChatBox from './Chatbox/ChatBox';
import PlayerContainer from './PlayerContainer/PlayerContainer';
import Header from './Header/Header';
import '../../Stylings/GameRoom.css'
import Logo from '../Logo';
      

function GameRoom({socket, setRoom}) {      

    const [utensil, SetUtensil] = useState({
        tool: "brush",
        weight: 5,
        color: "black"
    });

    const [lastColor, setLastColor] = useState(utensil["color"]);    

    function handleUtensil(updateItem, keyHolder){
        const newUtensil={...utensil};
            if(updateItem === "eraser"){
                setLastColor(()=>utensil["color"])
                newUtensil["color"] = "white";
                newUtensil["tool"] = "eraser";
                SetUtensil(()=>newUtensil)
            } else {
                if(utensil["tool"] === "eraser"){
                    newUtensil["color"] = lastColor;
                } 
                newUtensil[keyHolder] = updateItem.toLowerCase();
                SetUtensil(()=>newUtensil)
            }
    }

    return (
        <>
            <div className="logo-header" onClick={()=>setRoom("home")}>
                <Logo/>
            </div>
            <div className="container">
                
                <Header/>

                <div id = "middle-section-gameroom">
                    <div>
                        <PlayerContainer/>
                    </div>
                    <div>
                        <DrawingCanvas utensil={utensil}/>
                    </div>
                    <div>
                        <ChatBox socket={socket}/>
                    </div>
                </div>
                <div>
                    <ToolBox handleUtensil={handleUtensil} utensil={utensil}/>
                </div>
            </div>
        </>
    );
}

export default GameRoom;
