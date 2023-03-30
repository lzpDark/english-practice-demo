import React from 'react';
import { useNavigate } from 'react-router-dom';

const topics = [
  'Travel',
  'Sports',
  'Food',
  'Technology',
  'Movies',
];

function TopicPage() {
  const navigate = useNavigate();

  const handleTopicSelect = (topic) => {
    navigate('/conversation', { state: { selectedTopic: topic } });
  };

  return (
    <div>
      <h1>English Speaking Practice</h1>
      <ul>
        {topics.map((topic, index) => (
          <li key={index} onClick={() => handleTopicSelect(topic)}>
            {topic}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TopicPage;
