// components/UpcomingRace.js

import React, { useState, useEffect } from 'react';
import fetchSessions from '../apis/openF1Client';

const UpcomingRace = () => {
  const [races, setRaces] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const sessions = await fetchSessions();
        setRaces(sessions);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  const today = new Date();
  const upcomingRace = races.find((race) => new Date(race.date_start) >= today);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!upcomingRace) {
    return <p className= "text-white">No upcoming races found.</p>;
  }

  const raceDate = new Date(upcomingRace.date_start);

  return (
    <section className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl text-white font-bold mb-4 text-gray-800">Upcoming Race Weekend</h2>
      <div>
        <h3 className="text-2xl text-white font-semibold text-gray-800">{upcomingRace.session_name}</h3>
        <p className="text-gray-600">{raceDate.toLocaleDateString()} - {upcomingRace.location}</p>
        <div className="mt-4">
          <h4 className="text-xl text-white font-semibold text-gray-700">Race Weekend Schedule</h4>
          <ul className="text-gray-600">
            <li>Practice 1: {new Date(raceDate.setDate(raceDate.getDate() - 2)).toLocaleDateString()}</li>
            <li>Practice 2: {new Date(raceDate.setDate(raceDate.getDate() + 1)).toLocaleDateString()}</li>
            <li>Qualifying: {new Date(raceDate.setDate(raceDate.getDate() + 1)).toLocaleDateString()}</li>
            <li>Race: {raceDate.toLocaleDateString()}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default UpcomingRace;
