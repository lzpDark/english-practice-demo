import React from 'react';
import TopicList from './TopicList';

const topics = ['Weather', 'Travel', 'Food', 'Hobbies', 'Work'];

const TopicPage = ({ onTopicSelect }) => {
  return (
    <div>
      <h1>English Speaking Practice</h1>
      <TopicList topics={topics} onSelect={onTopicSelect} />
    </div>
  );
};

export default TopicPage;
