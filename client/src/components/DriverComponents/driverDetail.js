import React from 'react';

const DriverDetail = ({ driver, onBack }) => {
  return (
    <div className="flex flex-col items-center p-4">
      <button onClick={onBack} className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-md">Back to Standings</button>
      <img
        src={driver.imageUrl}
        alt={`${driver.firstName} ${driver.lastName}`}
        className="w-32 h-32 rounded-full mb-4 border-4 border-gray-200"
      />
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{driver.firstName} {driver.lastName}</h2>
      <p className="text-lg text-gray-600 mb-2"><span className="font-bold">Team:</span> {driver.teamName}</p>
      <p className="text-lg text-gray-600 mb-2"><span className="font-bold">Points:</span> {driver.standing.points}</p>
      <p className="text-lg text-gray-600 mb-2"><span className="font-bold">Position:</span> {driver.standing.position}</p>
      <div className="mt-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2">History</h3>
        <p className="text-gray-600">{driver.history}</p>
      </div>
    </div>
  );
};

export default DriverDetail;
