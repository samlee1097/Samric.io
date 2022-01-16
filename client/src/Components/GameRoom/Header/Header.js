import React, {useState} from 'react';
import Clock from './Clock';
import Rounds from './Rounds';
import ShowWord from './ShowWord';

function Header({drawTime, rounds}) {

    const [roundsLeft, setRoundsLeft] = useState(rounds)

    return (
       <div id="gameroom-header">
           <div id="clock-div">
                <Clock drawTime={drawTime} setRoundsLeft={setRoundsLeft} rounds={rounds}/>
           </div>
           <div id="rounds-div">
                <Rounds rounds={rounds} roundsLeft={roundsLeft}/>
           </div>
           <div id="showword-div">
                <ShowWord/>
           </div>
       </div>
    );
}

export default Header;
