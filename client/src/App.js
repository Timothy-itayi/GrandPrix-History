import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/LayoutComponents/navBar'
import './index.css';
import Home from './pages/home'; 
import Dashboard from './pages/driverStanding';
import Grandprix from './pages/grandprix';

const App = () => {
  return (
  <>
      <NavBar />
      <div className="flex flex-col bg-black  items-center p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/drivers" element={<Dashboard />} />
          <Route path="/grandprix" element={<Grandprix />} />
        </Routes>
      </div>
      </>
  );
};

export default App;
