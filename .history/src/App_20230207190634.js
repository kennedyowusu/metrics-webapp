import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/Pages/HomePage';
function App() {
  return (
    <div
      className="w-full"
    >
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
