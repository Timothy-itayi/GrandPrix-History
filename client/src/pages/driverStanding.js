// components/Dashboard.js

import React from 'react';
import ScrollToTop from '../components/LayoutComponents/scrollToTop'
import DriverStandings from '../components/DriverComponents/driverStanding';


const DriverStanding = () => {
  

  return (
    <div className="container bg-black mx-auto p-4">
      <h1 className="text-8xl font-bold mb-4  text-center text-white">Driver Standings</h1>
      <h2 className="text-2xl header-font mb-4 text-center  text-white"> The Current Drivers Standings of the 2024 Formula 1 Season.<br /> Tap Driver card to View latest session position.</h2>
    <ScrollToTop/>
        {/* Driver Standings */}
        <div className="col-span-1">
          <section className="bg-black shadow-md">
            <DriverStandings />
          </section>
        </div>
      </div>
    
  );
};

export default DriverStanding;
