// DriverStanding.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import DriverStanding from './DriverStanding';

// Mocking the apiClient module
jest.mock('../apiClient', () => ({
  get: jest.fn(), // Mock the get function
}));

describe('DriverStanding', () => {
  it('should render without crashing', () => {
    render(<DriverStanding />);
  });

  it('should display "Loading..." while fetching data', () => {
    render(<DriverStanding />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('should display driver standings once data is fetched successfully', async () => {
    const mockData = {
      items: [
        {
          firstName: 'Lewis',
          lastName: 'Hamilton',
          constructors: [{ name: 'Mercedes' }],
          standing: { points: 100, position: 1 },
        },
        {
          firstName: 'Max',
          lastName: 'Verstappen',
          constructors: [{ name: 'Red Bull Racing' }],
          standing: { points: 90, position: 2 },
        },
      ],
    };

    // Mocking the successful data fetching
    jest.spyOn(global, 'fetch').mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockData),
    });

    render(<DriverStanding />);

    // Check if driver standings are displayed
    expect(await screen.findByText('Lewis Hamilton')).toBeInTheDocument();
    expect(screen.getByText('Max Verstappen')).toBeInTheDocument();
  });

  it('should handle errors during data fetching', async () => {
    const errorMessage = 'Failed to fetch data';

    // Mocking the failed data fetching
    jest.spyOn(global, 'fetch').mockRejectedValueOnce(new Error(errorMessage));

    render(<DriverStanding />);

    // Check if error message is logged
    expect(await screen.findByText('Error fetching data: Failed to fetch data')).toBeInTheDocument();
  });
});
