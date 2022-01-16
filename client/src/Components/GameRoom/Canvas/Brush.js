import React from 'react';
import {BsCircleFill} from 'react-icons/bs'

function Brush({handleUtensil}) {   

    return (
        <div id="weight-container" title="Set brush size">
            <button className="weight-button" value="4" onClick={()=>handleUtensil("4", "weight")}>
                <BsCircleFill id="weight-1"/>
            </button>
            <button className="weight-button" selected value="9" onClick={()=>handleUtensil("9", "weight")}>
                <BsCircleFill id="weight-2"/>
            </button>
            <button className="weight-button" value="18" onClick={()=>handleUtensil("18", "weight")}>
                <BsCircleFill id="weight-3"/>
            </button>
            <button className="weight-button" value="30" onClick={()=>handleUtensil("30", "weight")}>
                <BsCircleFill id="weight-4"/>
            </button>
        </div>
    );
}

export default Brush;
