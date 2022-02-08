import React from 'react';
import Settings from './Settings';
import InviteFriends from './InviteFriends';
import '../../Stylings/PrivateRoom.css';
import PrivateRoomPlayers from './PrivateRoomPlayers';
import Logo from '../Logo';

function PrivateRoom({setDrawTime, setUserList, setRounds, setRoom, gameId, userList, socket, username}) {
    
    const userData = {
        username: username,
        gameId: gameId,
        socketId: socket.id
    }

    function handleClick(){
        setRoom(()=>"home");
        setUserList(list => list.filter(user => user.socketId !== userData.socketId));
        socket.emit("disconnect");
    }

    return (
        <>  
            <div className='logo-header'>
                <Logo handleClick={handleClick}/>
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
