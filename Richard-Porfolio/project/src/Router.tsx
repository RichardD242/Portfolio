import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Stats from './components/Stats';

const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/stats" element={<Stats />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
