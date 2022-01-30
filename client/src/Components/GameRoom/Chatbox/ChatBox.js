import React, { useEffect, useState, useContext} from 'react';
import MessageItem from './MessageItem'
import { ActionCableContext } from '../../..';
import { useSelector } from 'react-redux'
import { selectMessagesByTeam } from '../../../Features/messageSlice'

function ChatBox() {

    const [msgToSend, setMsgToSend] = useState('');
    const [messages, setMessages] = useState([]);
    const cable = useContext(ActionCableContext);
    const [channel, setChannel] = useState(null);
    const [currentGameRoom, setCurrentGameRoom] = useState(null);

    // useEffect(() => {

    //   fetch('/gameroom', {
    //     method: "POST",
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //         name: username,
    //         avatar: image,
    //         points: 0,
    //         isDrawing: false
    //     })       
    //   })

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

    // The corresponding action in our backend MessagesChanel is receive(data)
    // function sendMessage(content){
    //     const data = { gameroomId, userId, content }
    //     channel.send(data)
    // }

    const renderedMessages =
      messages &&
      messages.map((message) => (
        <MessageItem key={message.id} message={message} />
    ))

    return (
       <div id="gameroom-chatbox">
           <p>ChatBox</p>
                {renderedMessages}
           <form>
                <input className="sender" type="text" value={msgToSend} onChange={e => setMsgToSend(e.target.value)}/>
                <button className="sender-submit" type="submit">Send</button>
            </form>
       </div>
    );
}

export default ChatBox;
