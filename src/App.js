import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopicPage from './TopicPage';
import ConversationPage from './ConversationPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TopicPage />} />
        <Route path="conversation" element={<ConversationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
