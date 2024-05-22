import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Home = () => {
  return (
    <div className="overflow-hidden py-24 pb-20 animate-fade-up">
      <header className="text-center ">
        <div >
        <h1 className="text-7xl font-bold pb-10 text-gray-800 text-white">Welcome to GrandPrix History</h1>
        </div>
      
        <div className="text-3xl text-gray-600 mb-6 text-white mx-auto max-w-3xl px-4">
          <p>Tracing the Thrills: Unveiling Formula 1's Historic Tracks</p>
        </div>
      </header>
      <div className="grid gap-4 md:flex md:flex-row md:flex-wrap justify-center">
        <section className="my-8 p-6 bg-gray-100 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold mb-4 text-gray-700">GrandPrix</h2>
          <p className="text-gray-600 mb-4">
            Learn about and Explore all 24 tracks of the Current Formula 1 Season. 
          
          </p>
          <Link to="/grandprix">
            <button className="bg-orange-600 text-white font-bold px-4 py-2 rounded hover:bg-red-600 transition duration-300">View GrandPrix</button>
          </Link>
        </section>
        <section className="my-8 p-6 bg-white rounded-lg">
          <h2 className="text-3xl font-semibold mb-4 text-gray-700">Drivers</h2>
          <p className="text-gray-600 mb-4">
            Catch up with the Drivers Standings of the current Formula 1 Season
          </p>
          <Link to="/drivers">
            <button className="bg-orange-600 text-white font-bold  px-4 py-2 rounded hover:bg-red-600 transition duration-300">View Drivers</button>
          </Link>
        </section>
      </div>
      <footer className="text-center  ">
        <p className="text-white">
          &copy; {new Date().getFullYear()} GrandPrix History. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;
