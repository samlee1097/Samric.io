import React, { useEffect } from 'react';
import Settings from './Settings';
import InviteFriends from './InviteFriends';
import '../../Stylings/PrivateRoom.css';
import PrivateRoomPlayers from './PrivateRoomPlayers';
import Logo from '../Logo';

function PrivateRoom({setDrawTime, setUserList, setRounds, setRoom, gameId, userList, socket, username, setSocketId}) {
    
    const userData = {
        username: username,
        gameId: gameId,
        socketId: socket.id
    }
    
    useEffect(()=> {
        setSocketId(() => socket.id);
        socket.on("filter_users", (data) => {
            setUserList(()=> data)
        });
    }, [socket])

    function handleClick(){
        setRoom(()=>"home");
        setUserList((list)=> list.filter(user => user.socketId !== socket.id));
        socket.emit("remove_user", userData);
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
