// components/CurrentRace.js

import React, { useState, useEffect } from 'react';
import apiClient from '../apis/apiClient'; // Ensure this client is correctly configured
import CircuitImages from '../models/races'; // Ensure this model has the images
import moment from 'moment'; // Import moment.js for date and time handling

const CurrentRace = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentRace, setCurrentRace] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiClient.get('/grandprix');
        const fetchedData = response.data;

        if (Array.isArray(fetchedData.items)) {
          // Filter for current race
          const currentDateTime = moment();
          const race = fetchedData.items.find((item) => {
            const startDate = moment(item.startDate);
            const endDate = moment(item.endDate);
            return currentDateTime.isBetween(startDate, endDate);
          });
          setCurrentRace(race);
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

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!currentRace) {
    return <p className="text-white">No current race found.</p>;
  }

  const startDate = moment(currentRace.startDate);
  const endDate = moment(currentRace.endDate);
  const circuitImage = CircuitImages.find(image => image.id === currentRace.circuitId);

  return (
    <section className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Current Race Weekend</h2>
      <div>
        <h3 className="text-2xl font-semibold text-gray-800">{currentRace.name}</h3>
        <p className="text-gray-600">
          {startDate.format('YYYY-MM-DD HH:mm')} - {endDate.format('YYYY-MM-DD HH:mm')} at {currentRace.circuit.name}, {currentRace.circuit.country.name}
        </p>
        {circuitImage && (
          <div className="">
            <img src={circuitImage.ImageUrl} alt={currentRace.circuit.name} className="w-48 h-48 shadow-md" />
          </div>
        )}
        <div className="mt-4">
          <h4 className="text-xl font-semibold text-gray-700">Race Weekend Schedule</h4>
          <ul className="text-gray-600">
            <li>Practice 1: {startDate.clone().subtract(2, 'days').format('YYYY-MM-DD')}</li>
            <li>Practice 2: {startDate.clone().add(1, 'day').format('YYYY-MM-DD')}</li>
            <li>Qualifying: {startDate.clone().add(1, 'day').format('YYYY-MM-DD')}</li>
            <li>Race: {endDate.format('YYYY-MM-DD')}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CurrentRace;
