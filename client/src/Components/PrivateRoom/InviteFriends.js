import React, {useState} from 'react';

function InviteFriends({gameId}) {
    const [showLink, setShowLink] = useState(false)
    return (
       <div id="friend-invite-container">
           <h2 id='private-room-invite'>Invite your friends!</h2>
           {showLink ? <p id="secret-invite-link" onMouseOut={()=>setShowLink(false)}>{gameId}</p> : <p id="invite-link" onMouseOver={()=>setShowLink(true)}>Hover over me to see your game ID!</p>}
       </div>
    );
}

export default InviteFriends;
