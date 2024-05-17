import './App.css';
import apiClient from './apiClient';
import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await apiClient.get('/');
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data: ', error);
      setIsLoading(false);
      throw error; // Propagate the error
    }
  };

  // Call fetchData when component mounts
  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p>Welcome to Hyper</p>
      {data && data.items.map((driver, index) => (
        <div key={index}>
          <h2>{driver.firstName} {driver.lastName}</h2>
          <p>Team: {driver.constructors[0].name}</p>
          <p>Points: {driver.standing.points}</p>
          <p>Position: {driver.standing.position}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
