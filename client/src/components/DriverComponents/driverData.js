import React, { useState, useEffect } from 'react';
import apiClient from '../../apis/apiClient';
import driverImages from '../../models/drivers';

const DriverData = ({ children }) => {
  const [driverList, setDriverList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await apiClient.get('/');
      const fetchedData = response.data;

      // Ensure fetchedData is an array and has items
      if (!Array.isArray(fetchedData) || !fetchedData[0] || !fetchedData[0].items) {
        throw new Error('Invalid data structure');
      }

      const items = fetchedData[0].items;

      // Map images and driver numbers to driver IDs
      const driverMap = {};
      driverImages.forEach(driver => {
        driverMap[driver.id] = {
          image: driver.image,
          driver_number: driver.driver_number,
          suitColor: driver.suitColor
        };
      });

      // Extract and sort drivers
      const drivers = [];
      items.forEach(team => {
        if (team.drivers) {
          team.drivers.forEach(driver => {
            drivers.push({
              ...driver,
              teamName: team.fullName,
              imageUrl: driverMap[driver.id] ? driverMap[driver.id].image : null,
              driver_number: driverMap[driver.id] ? driverMap[driver.id].driver_number : null,
              suitColor: driverMap[driver.id]? driverMap[driver.id].suitColor: null
            });
          });
        }
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
