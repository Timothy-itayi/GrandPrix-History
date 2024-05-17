
import React from 'react';
import racesData from '../models/races';
import DriverStandings from '../pages/drivers';
import RaceList from '../components/raceList';
import UpcomingRace from '../components/UpcomingRace'

const Dashboard = () => {
  const today = new Date();

  const pastRaces = racesData.filter((race) => new Date(race.date) < today);
  const futureRaces = racesData.filter((race) => new Date(race.date) > today);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Upcoming Race */}
        <div className="col-span-1 lg:col-span-2">
          <UpcomingRace races={racesData} />
        </div>
 {/* Driver Standings */}
        <div className="col-span-1">
          <section className="my-8 p-4 bg-white rounded-lg shadow-md">
         
            <DriverStandings />
          </section>
        </div>

        {/* Past Races */}
        <div className="col-span-1 lg:col-span-1">
          <RaceList title="Past Races" races={pastRaces} />
        </div>

        {/* Future Races */}
        <div className="col-span-1 lg:col-span-2">
          <RaceList title="Future Races" races={futureRaces} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;