import React, { useState } from 'react';

const Conversation = ({ topic }) => {

  const [conversationList, setConversationList] = useState([]);
  const [conversationHistory, setConversationHistory] = useState([]);
  const [summary, setSummary] = useState([]);

  const generateConversation = (prompt, callback) => {
    
    fetch('https://api.openai.com/v1/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // WARNING: this should not be used in production, will leak your API key!!!
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'text-davinci-003',
        prompt: prompt,
        max_tokens: 512,
        temperature: 0.5,
      }),
    })
      .then(response => response.json())
      .then(data => {
        callback(data.choices[0].text);
      })
  };


  const addConversation = (conversation) => {
    setConversationList(prevList => [...prevList, conversation]);
    setConversationHistory(prevList => [...prevList, conversation]);
  };

  const handleVoiceInput = () => {
    // Implement voice input functionality here
    const newPropmt = 'say something, different with before';
    addConversation(newPropmt);
    generateConversation(newPropmt, addConversation);
  };

  const handleFinish = () => {
    setSummary('Good job, you finished the conversation!');
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
      {summary && <p>{summary}</p>}
    </div>
  );
};

export default Conversation;

