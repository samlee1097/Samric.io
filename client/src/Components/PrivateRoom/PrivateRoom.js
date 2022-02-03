import React from 'react';
import Settings from './Settings';
import InviteFriends from './InviteFriends';
import '../../Stylings/PrivateRoom.css';
import PrivateRoomPlayers from './PrivateRoomPlayers';
import Logo from '../Logo';

function PrivateRoom({setDrawTime, setRounds, setRoom, gameId}) {

    return (
        <>  
            <div className='logo-header' onClick={()=>setRoom("home")}>
                <Logo/>
            </div>
            <div id="private-room-top">
                <Settings setDrawTime={setDrawTime} setRounds={setRounds} setRoom={setRoom}/>
                <PrivateRoomPlayers/>
            </div> 
            <div id="private-room-bottom">
                <InviteFriends gameId={gameId}/>
            </div>
       </>
    );
}

export default PrivateRoom;
