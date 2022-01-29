import React from 'react';

function Settings({setDrawTime, setRounds, setRoom}) {

    function startGame(e) {
        e.preventDefault();
        setDrawTime(parseInt((e.target[1].value), 10))
        setRounds(parseInt((e.target[0].value), 10))
        setRoom(()=>"game");
    }

    return (
       <div className="settings-container">
           <h2 className='private-room-title'>Settings</h2>
           <form id="lobby-container" onSubmit={startGame}>
               <h3>Lobby</h3>
               <div id="rounds-container">
                    <p><strong>Rounds</strong></p>
                    <select className='dropdown'> 
                        <option className='round-entry'>2</option>
                        <option default className='round-entry'>3</option>
                        <option className='round-entry'>4</option>
                        <option className='round-entry'>5</option>
                        <option className='round-entry'>6</option>
                        <option className='round-entry'>7</option>
                        <option className='round-entry'>8</option>
                        <option className='round-entry'>9</option>
                        <option className='round-entry'>10</option>
                    </select>
               </div>

               <div className="lobby-details-container">
                    <p><strong>Draw time in seconds</strong></p>
                    <select className='dropdown'> 
                        <option className='round-entry'>30</option>
                        <option className='round-entry'>40</option>
                        <option className='round-entry'>50</option>
                        <option default className='round-entry'>60</option>
                        <option className='round-entry'>70</option>
                        <option className='round-entry'>80</option>
                        <option className='round-entry'>90</option>
                        <option className='round-entry'>100</option>
                    </select>
               </div>

               <div className="lobby-details-container">
                    <p><strong>Custom Words</strong></p>
                    <textarea id='textarea' placeholder='Type your custom words here separated by a comma. (Minimum of 4 words, maximum of 30 characters per word.)'></textarea>
               </div>

                <input id="checkbox" type="checkbox" name="exclusive"/><span id="checkbox-text">Use custom words exculsively.</span>

                <button id="start-custom-button">Start Game</button>
           </form>
       </div>
    );
}

export default Settings;

