// components/Dashboard.js

import React from 'react';
import racesData from '../models/grandprix';
import DriverStandings from '../components/DriverComponents/driverStanding';
import moment from 'moment';

const Dashboard = () => {
  // Function to get the current or next race ID
  const getCurrentRaceId = () => {
    const today = moment();
    const upcomingRaces = racesData.filter(race => moment(race.date).isAfter(today));

    if (upcomingRaces.length > 0) {
      return upcomingRaces[0].id; // Return the ID of the next race
    }

    // If there are no upcoming races, return the ID of the most recent race
    const pastRaces = racesData.filter(race => moment(race.date).isBefore(today));
    if (pastRaces.length > 0) {
      return pastRaces[pastRaces.length - 1].id;
    }

    return null; // If no races are found
  };

  const currentGrandPrixId = getCurrentRaceId();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4 text-gray-800"> Driver Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Upcoming Race */}
       
    
        </div>
        {/* Driver Standings */}
        <div className="col-span-1">
          <section className="bg-black shadow-md">
            <DriverStandings />
          </section>
        </div>
      </div>
    
  );
};

export default Dashboard;
