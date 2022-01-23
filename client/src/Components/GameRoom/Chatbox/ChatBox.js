import React from 'react';

function ChatBox() {

    const cable = useContext(ActionCableContext)
    const [channel, setChannel] = useState(null)
    const { gameroomId } = useParams()

    useEffect(() => {
        const channel = cable.subscriptions.create({
          channel: 'MessagesChannel',
          id: gameroomId,
        })
    
        setChannel(channel)
    
        return () => {
          channel.unsubscribe()
        }
      }, [gameroomId])

    return (
       <div id="gameroom-chatbox">
           <p>ChatBox</p>
           {/* Chat input – 330 x 30 
               Chatbox – 330 x 580*/} 
       </div>
    );
}

export default ChatBox;
