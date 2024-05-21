// Dashboard.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from './driverStanding';

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
    Upcoming Race Component
  </div>
));

jest.mock('../components/raceList', () => ({ title, races }) => (
  <div data-testid="race-list">
    {title}
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

  it('should render race sections', () => {
    render(<Dashboard />);
    expect(screen.getByTestId('upcoming-race')).toBeInTheDocument();
    expect(screen.getAllByTestId('race-list').length).toBe(2); // Two race lists for past and future races
  });

  it('should pass correct data to child components', () => {
    render(<Dashboard />);

    expect(screen.getByTestId('upcoming-race')).toHaveTextContent('Upcoming Race Component');

    // Check that the race lists contain the correct titles
    expect(screen.getAllByTestId('race-list')[0]).toHaveTextContent('Past Races');
    expect(screen.getAllByTestId('race-list')[1]).toHaveTextContent('Future Races');
  });
});
