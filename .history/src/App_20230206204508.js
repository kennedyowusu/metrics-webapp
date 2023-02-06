import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/Pages/HomePage';
function App() {
  return (
    <div
      className="flex flex-col items-center justify-center w-full h-screen bg-red-500"
    >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<h1>About</h1>} />
        <Route path="dashboard" element={<h1>Dashboard</h1>} />
      </Routes>
    </div>
  );
}

export default App;
