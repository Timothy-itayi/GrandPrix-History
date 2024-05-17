import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import DriverStanding from './pages/drivers';
import Home from './pages/home'; // Create a Home component if you want a home page

function App() {
  return (
    
      <div className="flex flex-col items-center p-4">
        <p className="text-2xl font-bold mb-4">Welcome to Hyper</p>
        <nav className="mb-4">
          <Link to="/" className="mr-4 text-blue-500">Home</Link>
          <Link to="/drivers" className="text-blue-500">Driver Standings</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Add a Home component */}
          <Route path="/drivers" element={<DriverStanding />} />
        </Routes>
      </div>
   
  );
}

export default App;
