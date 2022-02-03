import React from 'react';

function PrivateRoomPlayers({userList}) {
    const listOfPlayers = userList.map(data => 
        <div className='avatar-container-private'>
            <img className='avatar-private-room' src={data.avatar}/>
            <p className='username-private-room'>{data.username}</p>
        </div>
    )

    return (
       <div className="settings-container">
           <h2 className='private-room-title'>Players</h2>
           <div id="players-grid">
                {listOfPlayers}
           </div>
       </div>
    );
}

export default PrivateRoomPlayers;
