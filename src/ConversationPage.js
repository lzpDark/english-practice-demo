import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Conversation from './Conversation';

function ConversationPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedTopic = location.state?.selectedTopic;

  useEffect(() => {
    if (!selectedTopic) {
      navigate('/');
    }
  }, [selectedTopic, navigate]);

  return (
    <div>
      <h1>English Speaking Practice</h1>
      {selectedTopic && (
        <>
          <h3>Conversation about {selectedTopic}</h3>
          <Conversation topic={selectedTopic} />
        </>
      )}
    </div>
  );
}

export default ConversationPage;
