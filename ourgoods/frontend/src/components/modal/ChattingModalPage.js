import React, { useState, useRef, useEffect } from 'react';
import SockJsClient from 'react-stomp';

import './css/ChattingModal.css';

import Chat from '../chatting/Chat';
import Input from '../chatting/Input';
import Login from '../chatting/Login';
import chatAPI from '../../api/ChatApi';

const Modal = (props) => {
  const { open, close, header } = props;

  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState(null);

  const onMessageReceived = (msg) => {
    console.log('New Message Received!!', msg);
    setMessages(messages.concat(msg));
  };

  const handleLoginSubmit = (name) => {
    setUser({ name: name });
  };

  const handleMessageSubmit = (msg) => {
    chatAPI
      .sendMessage(user.name, msg)
      .then((res) => {
        console.log('send', res);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const messagesEndRef = useRef();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          <header>
            {header}
            <button className="close" onClick={close}>
              {' '}
              &times;{' '}
            </button>
          </header>
          <main>
            {user !== null ? (
              <div className="chat-container">
                <SockJsClient
                  url={'http://localhost:8090/my-chat/'}
                  topics={['/topic/group']}
                  onConnect={console.log('connected!')}
                  onDisconnect={console.log('disconnected!')}
                  onMessage={(msg) => onMessageReceived(msg)}
                  debug={false}
                />
                <Chat messages={messages} currentUser={user} />
                <div ref={messagesEndRef} />
              </div>
            ) : (
              <Login handleOnSubmit={handleLoginSubmit} />
            )}
          </main>
          <footer>
            <Input handleOnSubmit={handleMessageSubmit} />
          </footer>
        </section>
      ) : null}
    </div>
  );
};
export default Modal;
