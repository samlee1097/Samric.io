import React, { useEffect, useState, useContext} from 'react';
import Settings from './Settings';
import PrivateRoomPlayers from './PrivateRoomPlayers';
import InviteFriends from './InviteFriends'
import { useSelector } from 'react-redux';
import { ActionCableContext } from '../../';
import '../../Stylings/PrivateRoom.css'

function PrivateRoom({setDrawTime, setRounds, setRoom, gameId, userId}) {
    const cable = useContext(ActionCableContext)
    const [channel, setChannel] = useState(null)
    const users = useSelector(state => state.user.value);
    useEffect(() => {
        // Create a new subscription w/ channel & id, corresponding to the subscribed action in our backend
        const channel = cable.subscriptions.create({
          channel: 'MessagesChannel',
          id: gameId,
        }, 
        {
            received: (users)
        })
        
        // Update channel state in order to use subscription methods
        setChannel(channel)
        const data = {
            userId: userId
        }

        channel.send(data)
    
        return () => {
          channel.unsubscribe()
        }
      }, [gameId])

    return (
        <>
            <div id="private-room-top">
                <Settings setDrawTime={setDrawTime} setRounds={setRounds} setRoom={setRoom}/>
                <PrivateRoomPlayers/>
            </div> 
            <div id="private-room-bottom">
                <InviteFriends/>
            </div>
       </>
    );
}

export default PrivateRoom;
