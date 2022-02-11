import React from 'react';
import ScrollToBottom from "react-scroll-to-bottom";

function PlayerList({userList}) {
    const listOfPlayers = userList?.map(data => 
        <div className='avatar-container'>
            <img className='avatar-room-image' src={data.avatar}/>
            <p className='username-room'>{data.username}</p>
        </div>
    )

    return (
        <div id="gameroom-player-container">
            <ScrollToBottom>
           <div id="players-grid">
                {listOfPlayers ? listOfPlayers : null}
           </div>
           </ScrollToBottom>
       </div>
               
    );
}
export default PlayerList;
