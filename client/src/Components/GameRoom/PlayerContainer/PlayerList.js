import React from 'react';

function PlayerList({userList}) {
    const listOfPlayers = userList?.map(data => 
        <div className='avatar-container'>
            <img className='avatar-room-image' src={data.avatar}/>
            <p className='username-room'>{data.username}</p>
        </div>
    )

    return (
       <div id="gameroom-player-container">
           <div id="players-grid">
                {listOfPlayers ? listOfPlayers : null}
           </div>
       </div>
    );
}
export default PlayerList;
