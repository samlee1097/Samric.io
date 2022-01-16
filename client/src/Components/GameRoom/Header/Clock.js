import React, {useState, useEffect} from 'react';
import skribblio_timer from "./pictures/skribblio-clock.gif";

function Clock({drawTime, setRoundsLeft}) {
   const [timer, setTimer] = useState(drawTime);

   useEffect(() => {
      let ticker = setInterval(() => {
         if (timer > 0) {
            setTimer(prev=>prev-1);
         } else if (timer <= 0){
            setRoundsLeft(prev=>prev-1)
            clearInterval(ticker);
            alert("eric");
         }
      }, 1000)
      
      return () => {
         clearInterval(ticker);
       }

   }, [timer]);

    return (
       <div>
           <img
               id="skribblio-timer"
               src={skribblio_timer}
               alt="Timer Gif"
            />
           <p id="timer-ticker">{timer}</p>
       </div>
    );
}

export default Clock;