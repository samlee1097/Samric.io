import React, { useEffect, useState} from 'react';
import ScrollToBottom from "react-scroll-to-bottom";
import { useSelector } from 'react-redux';

function ChatBox({socket, currentMessage, setCurrentMessage, messageList, setMessageList}) {

    const gameId = useSelector(state => state.user.value.gameId);
    const username = useSelector(state => state.user.value.username);
    
    const messageData = {
      gameId: gameId,
      author: username,
      message: currentMessage,
    };

    const sendMessage = async () => {
        if (currentMessage !== "") {
          await socket.emit("send_message", messageData);
          setMessageList((list) => [...list, messageData]);
          setCurrentMessage("");
        }
    };

    useEffect(() => {
        socket.on("receive_message", (data) => {
          setMessageList((list) => [...list, data]);
        }); 
      }, [socket]);

    return (
       <div id="gameroom-chatbox">
        <ScrollToBottom className="message-container">
          {messageList.map((messageContent) => {
            return (
              <div className="message">
                <div>
                  <div className="message-content">
                  {messageContent.message.length < 25 ? <p><strong>{messageContent.author}</strong>: {messageContent.message}</p> : <p><strong>{messageContent.author}</strong>: <img className="image-sent" src={messageContent.message} alt="sent image"/></p>}
                  </div>
                </div>
              </div>
            );
          })}
        </ScrollToBottom>
        <div className="chat-footer">
            <input
                className='text-input-box'
                type="text"
                value={currentMessage}
                placeholder="Type your guess..."
                maxLength="25"
                onChange={(event) => {
                    setCurrentMessage(event.target.value);
                }}
                onKeyPress={(event) => {
                    event.key === "Enter" && sendMessage();
                }}
                />
            <button onClick={sendMessage} className='input-button'>&#9658;</button>
        </div>
       </div>
    );
}

export default ChatBox;
