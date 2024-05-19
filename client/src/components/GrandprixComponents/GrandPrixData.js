// components/GrandPrixData.js

import React, { useState, useEffect } from 'react';
import apiClient from '../../apis/apiClient';

const GrandPrixData = ({ children }) => {
  const [raceList, setRaceList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await apiClient.get('/grandprix');
      const fetchedData = response.data;

      // Map over the fetched data to create the races list
      const races = fetchedData.map(race => ({
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
