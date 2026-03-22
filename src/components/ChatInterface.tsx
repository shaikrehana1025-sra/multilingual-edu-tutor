import React, { useState } from 'react';

const ChatInterface = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const sendMessage = () => {
        if (input.trim()) {
            setMessages([...messages, { text: input, sender: 'user' }]);
            setInput('');
            // Here you can integrate the AI tutor response.
        }
    };

    return (
        <div>
            <div className="message-display">
                {messages.map((msg, index) => (
                    <div key={index} className={msg.sender}>{msg.text}</div>
                ))}
            </div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask your question..."
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default ChatInterface;