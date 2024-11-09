import '../Messages.css'; // Create a separate CSS file for styling if needed
import React, { useState, useEffect } from 'react';
import { fetchData, postData } from '../utils/api';

const Messages = () => {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    fetchData('/api/conversations').then(data => setConversations(data)); // Replace with actual API
  }, []);

  const sendMessage = () => {
    postData('/api/send-message', { message: newMessage, chatId: currentChat.id })
      .then(() => {
        // Update the conversation
        setNewMessage('');
      });
  };

  return (
    <div className="messages-container">
      <h2>Messages</h2>
      <div className="conversations">
        {conversations.map((chat, index) => (
          <div key={index} onClick={() => setCurrentChat(chat)}>
            {chat.title}
          </div>
        ))}
      </div>
      {currentChat && (
        <div className="chat-window">
          {/* Render chat messages here */}
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      )}
    </div>
  );
};

export default Messages;

