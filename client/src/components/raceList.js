// components/RaceList.js

import React, { useState } from 'react';

const RaceList = ({ title, races }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="my-4">
      <button
        onClick={toggleDropdown}
        className="w-full text-left bg-gray-200 p-4 rounded-lg shadow-md font-bold text-gray-800"
      >
        {title}
      </button>
      {isOpen && (
        <div className="bg-white p-4 rounded-lg shadow-md mt-2">
          {races.length > 0 ? (
            races.map((race) => (
              <div key={race.id} className="mb-4">
                <div className="text-xl font-semibold">{race.name}</div>
                <div className="text-gray-600">
                  {race.date} - {race.location}
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600">No races available.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default RaceList;
