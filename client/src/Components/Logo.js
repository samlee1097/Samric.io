import React from 'react';
import './Logo.css'
import {FaPaintBrush} from "react-icons/fa";

function Logo({handleClick}) {
    return (
       <div>
            <header id="homepage-header" onClick={handleClick}>
                <h1 id="rainbow-title">
                    <span>S</span>
                    <span>k</span>
                    <span>e</span>
                    <span>t</span>
                    <span>c</span>
                    <span>h</span>
                    <span>.</span>
                    <span>i</span>
                    <span>o</span>
                    &nbsp;
                    <FaPaintBrush id="paintbrush"/>
                </h1>
            </header>
       </div>
    );
}

export default Logo;
