// Dashboard.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from '../pages/dashboard';

// Mock the races data
jest.mock('../models/races', () => [

    { id: 2, name: 'Saudi Arabian Grand Prix', date: '2024-03-09', location: 'Jeddah Corniche Circuit, Jeddah' },
    { id: 3, name: 'Australian Grand Prix', date: '2024-03-24', location: 'Albert Park Circuit, Melbourne' },
    { id: 4, name: 'Japanese Grand Prix', date: '2024-04-07', location: 'Suzuka International Racing Course, Suzuka' },
    { id: 5, name: 'Chinese Grand Prix', date: '2024-04-21', location: 'Shanghai International Circuit, Shanghai' },
]);

// Mock child components
jest.mock('../components/UpcomingRace', () => ({ races }) => (
  <div data-testid="upcoming-race">
    Upcoming Race Component: {races.length} races
  </div>
));

jest.mock('../pages/drivers', () => () => <div data-testid="driver-standings">Driver Standings Component</div>);

jest.mock('../components/raceList', () => ({ title, races }) => (
  <div data-testid="race-list">
    {title}: {races.length} races
  </div>
));

describe('Dashboard', () => {
  it('should render without crashing', () => {
    render(<Dashboard />);
  });

  it('should contain the main header', () => {
    render(<Dashboard />);
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
  });

  it('should render all sections', () => {
    render(<Dashboard />);

    expect(screen.getByTestId('upcoming-race')).toBeInTheDocument();
    expect(screen.getByTestId('driver-standings')).toBeInTheDocument();
    expect(screen.getByTestId('race-list')).toBeInTheDocument();
    expect(screen.getAllByTestId('race-list').length).toBe(2); // Two race lists for past and future races
  });

  it('should pass correct data to child components', () => {
    render(<Dashboard />);

    expect(screen.getByTestId('upcoming-race')).toHaveTextContent('Upcoming Race Component: 2 races');
    expect(screen.getByTestId('driver-standings')).toHaveTextContent('Driver Standings Component');
    expect(screen.getAllByTestId('race-list')[0]).toHaveTextContent('Past Races: 0 races'); // No past races in the mock data
    expect(screen.getAllByTestId('race-list')[1]).toHaveTextContent('Future Races: 2 races'); // Two future races in the mock data
  });
});
