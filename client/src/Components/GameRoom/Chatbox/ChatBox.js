import React, { useEffect, useState, useContext} from 'react';
import { useParams } from 'react-router';
import MessageItem from './MessageItem'
import { ActionCableContext } from '../../..';
import { useSelector } from 'react-redux'
import { selectMessagesByTeam } from '../../../Features/messageSlice'
import TextEntry from './TextEntry';

function ChatBox() {

    // const cable = useContext(ActionCableContext)
    // const [channel, setChannel] = useState(null)
    // // React Hook method that extracts an object of the key/value pairs of the URL parameter
    // const { gameroomId } = useParams()

    // useEffect(() => {
    //     // Create a new subscription w/ channel & id, corresponding to the subscribed action in our backend
    //     const channel = cable.subscriptions.create({
    //       channel: 'MessagesChannel',
    //       id: gameroomId,
    //     })
        
    //     // Update channel state in order to use subscription methods
    //     setChannel(channel)
    
    //     return () => {
    //       channel.unsubscribe()
    //     }
    //   }, [gameroomId])

    // // The corresponding action in our backend MessagesChanel is receive(data)
    // function sendMessage(content){
    //     const data = { gameroomId, userId, content }
    //     channel.send(data)
    // }
    
    // const messages = useSelector((state) => selectMessagesByTeam(state, teamId))

    // const renderedMessages =
    //   messages &&
    //   messages.map((message) => (
    //     <MessageItem key={message.id} message={message} />
    // ))

    return (
       <div id="gameroom-chatbox">
           <p>ChatBox</p>
           {/* {renderedMessages}
           <TextEntry sendMessage={sendMessage} /> */}
       </div>
    );
}

export default ChatBox;
