import React, {} from 'react';


function Header({userList}) {

    const owner = userList?.map(user => user.owner === true);
    console.log(owner);

    return (
       <div id="gameroom-header">
           <div id="showword-div">
            
           </div>
       </div>
    );
}

export default Header;
