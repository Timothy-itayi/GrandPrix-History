import React from 'react';
import LoadingDriver from '../DriverComponents/loadingDriver';

const DriverDetail = ({ driver, latestPosition, latestSession, positionLoading, sessionLoading, positionError, sessionError, onBack }) => {
  // Check if either loading flag is true
  const isLoading = positionLoading || sessionLoading;

  return (
    <div className="driver-detail text-white py-10 p-4">
      <div className="mb-4">
        <h1 className="text-lg font-bold mb-2">Latest Position and Session</h1>

        {isLoading ? (
          <LoadingDriver />
        ) : positionError || sessionError ? (
          <p>Error loading data: {positionError || sessionError}</p>
        ) : latestPosition !== null && latestSession !== null ? (
          <>
            <h2 className="text-xl font-bold">
              {driver.firstName} {driver.lastName}
            </h2>
            <p className="text-xl font-bold">
              Finished in P{latestPosition} at {latestSession.location}.
            </p>
            <img
              className="object-contain h-48 w-48"
              src={driver.imageUrl}
              alt={`${driver.firstName} ${driver.lastName}`}
            />
          </>
        ) : (
          <p>No latest data available.</p>
        )}
      </div>

      <div className="pt-2">
        <button
          onClick={onBack}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded mb-4"
        >
          Back to Standings
        </button>
      </div>
    </div>
  );
};

export default DriverDetail;
