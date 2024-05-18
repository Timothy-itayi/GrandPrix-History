// components/UpcomingRace.js

import React, { useState, useEffect } from 'react';
import apiClient from '../apis/apiClient'; // Ensure this client is correctly configured
import CircuitImages from '../models/races'; // Ensure this model has the images

const UpcomingRace = () => {
  const [races, setRaces] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiClient.get('/grandprix');
        const fetchedData = response.data;

        if (Array.isArray(fetchedData) && fetchedData[0] && fetchedData[0].items) {
          setRaces(fetchedData[0].items);
        } else {
          throw new Error('Invalid data structure');
        }

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

  // Filter for upcoming races only
  const upcomingRaces = races.filter((race) => new Date(race.startDate) >= today);

  // Sort upcoming races by start date
  upcomingRaces.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));

  const upcomingRace = upcomingRaces.length > 0 ? upcomingRaces[0] : null;

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!upcomingRace) {
    return <p className="text-white">No upcoming races found.</p>;
  }

  const startDate = new Date(upcomingRace.startDate);
  const endDate = new Date(upcomingRace.endDate);
  const circuitImage = CircuitImages.find(image => image.id === upcomingRace.circuitId);

  return (
    <section className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Upcoming Race Weekend</h2>
      <div>
        <h3 className="text-2xl font-semibold text-gray-800">{upcomingRace.name}</h3>
        <p className="text-gray-600">
          {startDate.toLocaleDateString()} - {endDate.toLocaleDateString()} at {upcomingRace.circuit.name}, {upcomingRace.circuit.country.name}
        </p>
        {circuitImage && (
          <div className="">
            <img src={circuitImage.ImageUrl} alt={upcomingRace.circuit.name} className="w-48 h-48  shadow-md" />
          </div>
        )}
        <div className="mt-4">
          <h4 className="text-xl font-semibold text-gray-700">Race Weekend Schedule</h4>
          <ul className="text-gray-600">
            <li>Practice 1: {new Date(startDate.setDate(startDate.getDate() - 2)).toLocaleDateString()}</li>
            <li>Practice 2: {new Date(startDate.setDate(startDate.getDate() + 1)).toLocaleDateString()}</li>
            <li>Qualifying: {new Date(startDate.setDate(startDate.getDate() + 1)).toLocaleDateString()}</li>
            <li>Race: {endDate.toLocaleDateString()}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default UpcomingRace;
