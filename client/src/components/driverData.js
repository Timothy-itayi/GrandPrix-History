import React, { useState, useEffect } from 'react';
import apiClient from '../apis/apiClient';
import driverImages from '../models/drivers';

const DriverData = ({ children }) => {
  const [driverList, setDriverList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await apiClient.get('/');
      const fetchedData = response.data;

      // Map images to driver IDs
      const imageMap = {};
      driverImages.forEach(driver => {
        imageMap[driver.id] = driver.image;
      });

      // Extract and sort drivers
      const drivers = [];
      fetchedData.items.forEach(team => {
        team.drivers.forEach(driver => {
          drivers.push({
            ...driver,
            teamName: team.fullName,
            imageUrl: imageMap[driver.id] 
          });
        });
      });
      drivers.sort((a, b) => a.standing.position - b.standing.position);

      setDriverList(drivers);
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

  return children({ drivers: driverList, isLoading, error });
};

export default DriverData;
