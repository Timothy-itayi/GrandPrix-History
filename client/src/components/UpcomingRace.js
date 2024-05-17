// components/UpcomingRace.js

import React from 'react';

const UpcomingRace = ({ races }) => {
  const today = new Date();
  const upcomingRace = races.find((race) => new Date(race.date) >= today);

  if (!upcomingRace) return null;

  return (
    <section className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Upcoming Race Weekend</h2>
      <div>
        <h3 className="text-2xl font-semibold text-gray-800">{upcomingRace.name}</h3>
        <p className="text-gray-600">{new Date(upcomingRace.date).toLocaleDateString()} - {upcomingRace.location}</p>
        <div className="mt-4">
          <h4 className="text-xl font-semibold text-gray-700">Race Weekend Schedule</h4>
          <ul className="text-gray-600">
            <li>Practice 1: 2 Days Before Race</li>
            <li>Practice 2: 1 Day Before Race</li>
            <li>Qualifying: Day Before Race</li>
            <li>Race: Race Day</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default UpcomingRace;
