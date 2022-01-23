import React from 'react';

function ChatBox() {

    const cable = useContext(ActionCableContext)
    const [channel, setChannel] = useState(null)
    // React Hook method that extracts an object of the key/value pairs of the URL parameter
    const { gameroomId } = useParams()

    useEffect(() => {
        // Create a new subscription w/ channel & id, corresponding to the subscribed action in our backend
        const channel = cable.subscriptions.create({
          channel: 'MessagesChannel',
          id: gameroomId,
        })
        
        // Update channel state in order to use subscription methods
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
