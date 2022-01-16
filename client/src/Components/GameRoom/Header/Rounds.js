import React from 'react';

function Rounds({rounds, roundsLeft}) {

    return (
       <div>
           <p>Round {roundsLeft} of {rounds}</p>
       </div>
    );
}

export default Rounds;
