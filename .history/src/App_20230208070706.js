import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/Pages/HomePage';
import CountryDetailPage from './components/Pages/CountryDetailPage';
import NotFound from './components/Pages/NotFound';

function App() {
  return (
    <div
      className="w-full"
    >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/country/:country_name" element={<CountryDetailPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
