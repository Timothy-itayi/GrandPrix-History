import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import DriverStanding from './pages/drivers';
import Home from './pages/home'; // Ensure these paths are correct
import SelectionPage from './pages/SelectionPage';
import Dashboard from './pages/dashboard';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    
      <div className="flex flex-col items-center p-4">
        
        <div className="w-full flex justify-between items-center mb-4">
          <button 
            onClick={toggleMenu} 
            className="text-blue-500 md:hidden"
          >
            {/* Hamburger Icon */}
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
          <nav className={`flex ${menuOpen ? 'block' : 'hidden'}`}>
            <Link to="/" className="block mr-4 text-blue-500 md:inline">Home</Link>

            <Link to="/selection" className="block mr-4 text-blue-500 md:inline">Selection</Link>
            <Link to="/dashboard" className="block  mr-4 text-blue-500 md:inline">Dashboard</Link>
          </nav>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/selection" element={<SelectionPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
   
  );
};

export default App;
