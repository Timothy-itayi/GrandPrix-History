import React from 'react';

const DriverCard = ({ driver, onClick }) => {
  return (
    <div
      className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4 md:p-6 transition-transform transform hover:scale-105 hover:shadow-2xl cursor-pointer"
      onClick={onClick}
    >
      <img
        src={driver.imageUrl}
        alt={`${driver.firstName} ${driver.lastName}`}
        className="w-24 h-24 md:w-32 md:h-32 rounded-full mb-4 border-4 border-gray-200"
      />
      <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-2 text-center">{driver.firstName} {driver.lastName}</h2>
      <p className="text-sm md:text-base text-gray-600 mb-1 text-center"><span className="font-bold">Team:</span> {driver.teamName}</p>
      <p className="text-sm md:text-base text-gray-600 mb-1 text-center"><span className="font-bold">Points:</span> {driver.standing.points}</p>
      <p className="text-sm md:text-base text-gray-600 mb-1 text-center"><span className="font-bold">Position:</span> {driver.standing.position}</p>
    </div>
  );
};

export default DriverCard;
