import React from 'react';


function Header({owner}) {
    return (
       <div id="gameroom-header">
           <div id="showword-div">
                <p className="owner-title">Welcome to <strong className='user-title'>{owner?.username}</strong> Room!</p>
           </div>
       </div>
    );
}

export default Header;
