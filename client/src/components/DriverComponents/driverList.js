import React, { useState, useEffect } from 'react';
import DriverData from './driverData';
import DriverCard from '../../pages/driverCard';
import Detail from '../DriverComponents/driverDetail';
import LoadingStandings from '../DriverComponents/loadingStandings'
import apiClient from '../../apis/apiClient';


const DriverList = () => {
  const [selectedDriver, setSelectedDriver] = useState(null);
  const [latestPosition, setLatestPosition] = useState(null);
  const [latestSession, setLatestSession] = useState(null);
  const [positionLoading, setPositionLoading] = useState(false);
  const [sessionLoading, setSessionLoading] = useState(false);
  const [positionError, setPositionError] = useState(null);
  const [sessionError, setSessionError] = useState(null);

  const fetchLatestPosition = async (driverNumber) => {
    setPositionLoading(true);
    try {
      const response = await apiClient.get(`https://api.openf1.org/v1/position?session_key=latest&position<20`);
      const positionData = response.data;

      const currentTime = new Date();

      const driverPositionData = positionData
        .filter(driver => driver.driver_number === driverNumber)
        .sort((a, b) => new Date(b.date) - new Date(a.date));

      if (driverPositionData.length > 0) {
        const latestPosition = driverPositionData[0].position;
        setLatestPosition(latestPosition);
      } else {
        setLatestPosition(null);
      }

      setPositionLoading(false);
    } catch (error) {
      console.error('Error fetching latest position data:', error);
      setPositionLoading(false);
      setPositionError(error.message);
    }
  };

  const fetchLatestSession = async () => {
    setSessionLoading(true);
    try {
      const response = await apiClient.get(`https://api.openf1.org/v1/sessions?session_key=latest`);
      const sessionData = response.data;

      if (sessionData.length > 0) {
        const latestSession = sessionData[0];
        setLatestSession(latestSession);
      } else {
        setLatestSession(null);
      }

      setSessionLoading(false);
    } catch (error) {
      console.error('Error fetching latest session data:', error);
      setSessionLoading(false);
      setSessionError(error.message);
    }
  };

  useEffect(() => {
    if (selectedDriver) {
      fetchLatestPosition(selectedDriver.driver_number);
      fetchLatestSession();
    }
  }, [selectedDriver]);

  return (
    <DriverData>
      {({ drivers, isLoading, error }) => (
        <div className="flex flex-col items-center p-4">
          {selectedDriver ?
           (
            <Detail 
              driver={selectedDriver}
              latestPosition={latestPosition}
              latestSession={latestSession}
              positionLoading={positionLoading}
              sessionLoading={sessionLoading}
              positionError={positionError}
              sessionError={sessionError}
              onBack={() => setSelectedDriver(null)}
            />
          ) : (
            <> 
              {isLoading ? (
                <LoadingStandings />
              ) : error ? (
                <div className="text-xl font-semibold text-red-500">{error}</div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
                  {drivers.map((driver) => (
                    <DriverCard
                      key={driver.id}
                      driver={driver}
                      onClick={() => setSelectedDriver(driver)}
                    />
                  ))}
                </div>
              )}
            </>
          )}   
        </div>
      )}
    </DriverData>
  );
};

export default DriverList;
