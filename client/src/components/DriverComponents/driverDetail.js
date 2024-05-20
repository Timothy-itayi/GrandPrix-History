import React from 'react';

const DriverDetail = ({ driver, latestPosition, latestSession, positionLoading, sessionLoading, positionError, sessionError, onBack }) => {
  return (
    <div className="driver-detail text-white p-4">
      <button onClick={onBack} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">Back</button>
      <div className="mb-4">
        <h2 className="text-xl font-bold">{driver.firstName} {driver.lastName}</h2>
      </div>
      {positionLoading || sessionLoading ? (
        <p>Loading latest data...</p>
      ) : positionError || sessionError ? (
        <p>Error loading data: {positionError || sessionError}</p>
      ) : latestPosition !== null && latestSession !== null ? (
        <>
          <h3 className="text-lg font-bold mb-2">Latest Position and Session</h3>
          <p>Finished in P{latestPosition} at {latestSession.location}.</p>
        </>
      ) : (
        <p>No latest data available.</p>
      )}
    </div>
  );
};

export default DriverDetail;
