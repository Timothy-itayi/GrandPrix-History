// components/GrandPrixData.js

import React, { useState, useEffect } from 'react';
import apiClient from '../apis/apiClient';

const GrandPrixData = ({ children }) => {
  const [raceList, setRaceList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await apiClient.get('/grandprix');
      const fetchedData = response.data;

      // Ensure fetchedData is an array and has items
      if (!Array.isArray(fetchedData) || !fetchedData[0] || !fetchedData[0].items) {
        throw new Error('Invalid data structure');
      }

      const races = fetchedData[0].items.map(race => ({
        id: race.id,
        name: race.name,
        date: `${new Date(race.startDate).toLocaleDateString()} - ${new Date(race.endDate).toLocaleDateString()}`,
        location: `${race.circuit.name}, ${race.circuit.country.name}`
      }));

      setRaceList(races);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsLoading(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return children({ races: raceList, isLoading, error });
};

export default GrandPrixData;
