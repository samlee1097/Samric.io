import React from 'react';

function ColorCard({color, handleUtensil}) {
    return (
       <div onClick={()=>handleUtensil(color, "color")}className="color-icon" style={{backgroundColor:`${color}`}}>
       </div>
    );
}

export default ColorCard;
