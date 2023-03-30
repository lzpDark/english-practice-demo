import React from 'react';
import Conversation from './Conversation';

const ConversationPage = ({ topic, onFinish }) => {
  return (
    <div>
      <h1>English Speaking Practice</h1>
      <Conversation topic={topic} onFinish={onFinish} />
    </div>
  );
};

export default ConversationPage;
