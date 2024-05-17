import React from 'react';
import racesData from '../models/races'
import DriverStanding from '../pages/drivers'

const Dashboard = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">Dashboard</h1>

      {/* List of Races */}
      <section className="my-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">List of Races</h2>
        <div className="bg-white p-4 rounded-lg shadow-md">
          {racesData.map(race => (
            <div key={race.id} className="mb-4">
              <div className="text-xl font-semibold">{race.name}</div>
              <div className="text-gray-600">{race.date} - {race.location}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Driver Standings */}
      <section className="my-8">
      
      <DriverStanding/>
      </section>
    </div>
  );
};

export default Dashboard;
