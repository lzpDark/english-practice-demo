import React, { useState } from 'react';

const Conversation = ({ topic, onFinish }) => {
  const [conversationHistory, setConversationHistory] = useState([]);

  const handleVoiceInput = () => {
    // Implement voice input functionality here
  };

  const handleFinish = () => {
    onFinish('Good job, you finished the conversation!');
  };

  return (
    <div>
      <h2>{topic}</h2>
      <button onClick={handleVoiceInput}>Start Speaking</button>
      <div>
        <h3>Conversation History</h3>
        {conversationHistory.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
      <button onClick={handleFinish}>Finish</button>
    </div>
  );
};

export default Conversation;

