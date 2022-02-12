import React, {} from 'react';


function Header({owner}) {
    // console.log(owner)
    return (
       <div id="gameroom-header">
           <div id="showword-div">
                <p>Welcome to {owner?.username}'s Room!</p>
           </div>
       </div>
    );
}

export default Header;
