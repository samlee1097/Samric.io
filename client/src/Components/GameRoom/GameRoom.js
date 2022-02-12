import React, {useState, useEffect} from 'react';

import ToolBox from './Canvas/ToolBox';
import DrawingCanvas from './Canvas/DrawingCanvas'
import ChatBox from './Chatbox/ChatBox';
import PlayerList from './PlayerContainer/PlayerList';
import Header from './Header/Header';
import '../../Stylings/GameRoom.css'
import Logo from '../Logo';

import { useSelector } from 'react-redux';

function GameRoom({socket, setRoom, userList}) {      

    const [currentMessage, setCurrentMessage] = useState("");
    const [messageList, setMessageList] = useState([]);
    const [utensil, SetUtensil] = useState({
        tool: "brush",
        weight: 5,
        color: "black"
    });

    const gameId = useSelector(state => state.user.value.gameId);
    const username = useSelector(state => state.user.value.username);

    const userData = {
        username: username,
        gameId: gameId,
        socketId: socket.id
    }

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

    function handleClick(){
        setRoom(()=>"home");
        socket.emit("user_leaves", userData);
    }

    return (
        <>
            <div className='logo-header'>
                <Logo handleClick={handleClick}/>
            </div>
            <div className="container">
                <Header owner={userList[0]}/>
                <div id = "middle-section-gameroom">
                    <div>
                        <PlayerList userList={userList}/>
                    </div>
                    <div>
                        <DrawingCanvas utensil={utensil} socket={socket} setCurrentMessage={setCurrentMessage} setMessageList={setMessageList}/>
                    </div>
                    <div>
                        <ChatBox socket={socket} currentMessage={currentMessage} setCurrentMessage={setCurrentMessage} setMessageList={setMessageList} messageList={messageList}/>
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
