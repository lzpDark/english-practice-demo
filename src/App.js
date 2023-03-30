import React, { useState } from 'react';
import TopicList from './TopicList';
import Conversation from './Conversation';

const topics = ['Weather', 'Travel', 'Food', 'Hobbies', 'Work'];

function App() {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [summary, setSummary] = useState(null);

  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic);
  };

  const handleConversationFinish = (summary) => {
    setSummary(summary);
  };

  return (
    <div className="App">
      <h1>English Speaking Practice</h1>
      {!selectedTopic && <TopicList topics={topics} onSelect={handleTopicSelect} />}
      {selectedTopic && !summary && (
        <Conversation topic={selectedTopic} onFinish={handleConversationFinish} />
      )}
      {summary && <p>{summary}</p>}
    </div>
  );
}

export default App;

