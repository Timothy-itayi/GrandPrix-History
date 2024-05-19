import React, { useState, useEffect } from 'react';
import LoadingDriver from '../LayoutComponents/loadingDriver'

const DriverDetail = ({ driver, onBack }) => {
  const [sessionInfo, setSessionInfo] = useState({});
  const [positionInfo, setPositionInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSessionAndPosition = async () => {
      try {
        // Fetch session data to get latest session information for 2024
        const sessionResponse = await fetch('https://api.openf1.org/v1/sessions?year=2024');
        if (!sessionResponse.ok) {
          throw new Error('Failed to fetch session data');
        }
        const sessionData = await sessionResponse.json();
        const latestSession = sessionData.sort((a, b) => new Date(b.date_end) - new Date(a.date_end))[0];
        
        setSessionInfo(latestSession);

        // Fetch position data for the driver in the latest session
        const positionResponse = await fetch(`https://api.openf1.org/v1/position?meeting_key=${latestSession.meeting_key}&driver_number=${driver.number}&session_key=${latestSession.session_key}`);
        if (!positionResponse.ok) {
          throw new Error('Failed to fetch position data');
        }
        const positionData = await positionResponse.json();
        setPositionInfo(positionData);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSessionAndPosition();
  }, [driver.number]);

  return (
    <div className="flex flex-col items-center p-4">
      <button onClick={onBack} className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-md">Back to Standings</button>
      {isLoading ? (
       <LoadingDriver/>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="w-full">
          <h3 className="text-xl text-white  text-center font-bold text-gray-800 mb-2">Session Information</h3>
          <div className="mb-4 p-4 bg-gray-100 rounded-md shadow-md">
            <p><span className="font-bold">Location:</span> {sessionInfo.location}</p>
            <p><span className="font-bold">Session Name:</span> {sessionInfo.session_name}</p>
            <p><span className="font-bold">Session Type:</span> {sessionInfo.session_type}</p>
          </div>
          {positionInfo && (
            <div className="mb-4 p-4 bg-gray-100 rounded-md shadow-md">
              <p><span className="font-bold">Current Position:</span> {positionInfo.position}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DriverDetail;
