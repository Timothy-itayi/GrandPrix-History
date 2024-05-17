import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/navBar'

import Home from './pages/home'; // Ensure these paths are correct
import SelectionPage from './pages/SelectionPage';
import Dashboard from './pages/dashboard';

const App = () => {
  return (
  <>
      <NavBar />
      <div className="flex flex-col items-center p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/selection" element={<SelectionPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
      </>
  );
};

export default App;
