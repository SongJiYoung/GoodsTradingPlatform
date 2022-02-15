import React from "react";
import styles from './css/Chatting.module.css';

function Chat({ messages, currentUser }) {

  const formattingTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    let hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
    let min =
      date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    return `${hour}:${min}`;
  };

  return (
    <div className={styles.chatList}>
      {messages.map((msg, key) => ( 
        <li 
          key={key}
          className={`chat-bubble ${
            msg.author === currentUser.name ? styles.send : styles.receive
          }`}
        >
          <span>{msg.author}</span>
          <div>{msg.content}</div>
          <span>{formattingTimestamp(msg.timestamp)}</span>
        </li>
      ))}  
    </div>
  );
}

export default Chat;
