import React from 'react';
import DriverData from '../components/driverData';

const DriverStanding = () => {
  return (
    <DriverData>
      {({ drivers, isLoading, error }) => (
        <div className="flex flex-col items-center p-4">
          <p className="text-2xl font-bold text-white mb-4">Driver Standings</p>

          {isLoading ? (
            <div className="text-xl text-white font-semibold">Loading...</div>
          ) : error ? (
            <div className="text-xl font-semibold text-red-500">{error}</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-h-96 overflow-y-auto">
              {drivers.map((driver) => (
                <div
                  key={driver.id}
                  className="flex flex-col items-start bg-white shadow-md rounded-lg p-4 mb-4 w-full"
                >
                  <img
                    src={driver.imageUrl}
                    alt={`${driver.firstName} ${driver.lastName}`}
                    className="w-32 h-32  mb-2"
                  />
                  <h2 className="text-xl font-semibold mb-2">{driver.firstName} {driver.lastName}</h2>
                  <p className="mb-1"><span className="font-bold">Team:</span> {driver.teamName}</p>
                  <p className="mb-1"><span className="font-bold">Points:</span> {driver.standing.points}</p>
                  <p className="mb-1"><span className="font-bold">Position:</span> {driver.standing.position}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </DriverData>
  );
};

export default DriverStanding;
