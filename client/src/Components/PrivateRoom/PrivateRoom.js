import React, { useEffect } from 'react';
import Settings from './Settings';
import InviteFriends from './InviteFriends';
import '../../Stylings/PrivateRoom.css';
import PrivateRoomPlayers from './PrivateRoomPlayers';
import Logo from '../Logo';

function PrivateRoom({setDrawTime, setRounds, setRoom, gameId, userList, socket, username}) {
    
    const userData = {
        username: username,
        gameId: gameId,
    }

    function handleClick(){
        socket.emit("user_left", userData);
        setRoom(()=>"home");
    }


    return (
        <>  
            <div className='logo-header' onClick={handleClick}>
                <Logo/>
            </div>
            <div id="private-room-top">
                <Settings setDrawTime={setDrawTime} setRounds={setRounds} setRoom={setRoom}/>
                <PrivateRoomPlayers userList={userList}/>
            </div> 
            <div id="private-room-bottom">
                <InviteFriends gameId={gameId}/>
            </div>
       </>
    );
}

export default PrivateRoom;
