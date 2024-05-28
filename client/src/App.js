import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/LayoutComponents/navBar'
import './index.css';
import Home from './pages/home'; 
import DriverStanding from './pages/driverStanding'
import Grandprix from './pages/grandprix';
import About from './pages/about'
import Showroom from './pages/showroom';

const App = () => {
  return (
  <>
      <NavBar />
      <div className="flex flex-col bg-black  py-10 items-center p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/showroom" element={<Showroom />} />
          <Route path="/drivers" element={<DriverStanding />} />
          <Route path="/about" element={<About/>} />
          <Route path="/grandprix" element={<Grandprix />} />
        </Routes>
      </div>
      </>
  );
};

export default App;
