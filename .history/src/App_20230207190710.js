import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/Pages/HomePage';
import  CountryDetailPage from './components/Pages/CountryDetailPage';

function App() {
  return (
    <div
      className="w-full"
    >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/country/:countryName" element={<CountryDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
