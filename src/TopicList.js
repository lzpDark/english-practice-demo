import React from 'react';

const TopicList = ({ topics, onSelect }) => {
  return (
    <div>
      <h2>Select a Topic</h2>
      <ul>
        {topics.map((topic, index) => (
          <li key={index} onClick={() => onSelect(topic)}>
            {topic}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopicList;

