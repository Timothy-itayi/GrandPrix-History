import React, { useState, useEffect } from 'react';
import apiClient from '../apiClient';

const DriverStanding = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await apiClient.get('/');
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:',error);
      
      setIsLoading(false);
  setError(error.message);
      throw error; // Propagate the error
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
   
    <div className="flex flex-col items-center p-4">
      <p className="text-2xl font-bold mb-4">Driver Standings</p>
  
      {isLoading ? (
      <div className="text-xl font-semibold">Loading...</div>
    ) : error ? (
      <div className="text-xl font-semibold text-red-500">{error}</div>
    ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-h-96 overflow-y-auto">
          {data && data.items.map((driver, index) => (
            <div 
              key={index} 
              className="flex flex-col items-start bg-white shadow-md rounded-lg p-4 mb-4 w-full"
            >
              <h2 className="text-xl font-semibold mb-2">{driver.firstName} {driver.lastName}</h2>
              <p className="mb-1"><span className="font-bold">Team:</span> {driver.constructors[0].name}</p>
              <p className="mb-1"><span className="font-bold">Points:</span> {driver.standing.points}</p>
              <p className="mb-1"><span className="font-bold">Position:</span> {driver.standing.position}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DriverStanding;