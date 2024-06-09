import React, { useState, useEffect } from 'react';
import { fetchDrivers } from '../../apis/apiClient';
import driverImages from '../../models/drivers';
import LoadingStandings from '../DriverComponents/loadingStandings'
const DriverData = ({ children }) => {
  const [driverList, setDriverList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      // Fetch drivers with seasonYear = 2024 and pageSize = 24
      const fetchedData = await fetchDrivers(24);

      // Log the fetched data to understand its structure
      console.log('Fetched Data:', fetchedData);

      // Ensure fetchedData has the items key and it's an array
      if (!fetchedData || !Array.isArray(fetchedData.items)) {
        throw new Error('Invalid data structure');
      }

      const items = fetchedData.items;
      console.log('Constructors:', items);

      // Map images and driver numbers to driver IDs
      const driverMap = {};
      driverImages.forEach(driver => {
        driverMap[driver.id] = {
          image: driver.image,
          driver_number: driver.driver_number,
          suitColor: driver.suitColor
        };
      });

      console.log('Driver Map:', driverMap); // Log the driver map

      // Extract and sort drivers
      const drivers = [];
      items.forEach(item => {
        if (item.constructors) {
          item.constructors.forEach(constructor => {
            drivers.push({
              ...item,
              teamName: constructor.fullName,
              imageUrl: driverMap[item.id] ? driverMap[item.id].image : null,
              driver_number: driverMap[item.id] ? driverMap[item.id].driver_number : null,
              suitColor: driverMap[item.id] ? driverMap[item.id].suitColor : null,
              standing: item.standing || {}, // Ensure standing is an object
            });
          });
        }
      });

      // Sort drivers by their standing position, defaulting to Infinity if position is undefined
      drivers.sort((a, b) => {
        const positionA = a.standing?.position ?? Infinity;
        const positionB = b.standing?.position ?? Infinity;
        return positionA - positionB;
      });

      console.log('Processed Drivers:', drivers); // Debugging line
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

  if (isLoading) {
    return <div><LoadingStandings/></div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return children({ drivers: driverList, isLoading, error });
};

export default DriverData;
