// DriverStanding.test.js
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import DriverStanding from '../pages/drivers';
import apiClient from '../apiClient';
import MockAdapter from 'axios-mock-adapter';
import '@testing-library/jest-dom/extend-expect';

describe('DriverStanding', () => {
  let mock;

  beforeEach(() => {
    // Initialize axios-mock-adapter before each test
    mock = new MockAdapter(apiClient);
  });

  afterEach(() => {
    // Reset the mock after each test
    mock.reset();
  });

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
          firstName: "Max",
          lastName: "Verstappen",
          constructors: [{ name: "Red Bull" }],
          standing: { position: 1, points: 136 },
        },
        {
          firstName: "Sergio",
          lastName: "Pérez",
          constructors: [{ name: "Red Bull" }],
          standing: { position: 2, points: 103 },
        },
      ],
    };
  
    // Mocking the successful data fetching
    mock.onGet('/').reply(200, mockData); // Use '/' instead of '/dashboard'
  
    render(<DriverStanding />);
  
    // Wait for the loading state to be removed and the data to be displayed
    await waitFor(() => expect(screen.queryByText('Loading...')).not.toBeInTheDocument());
  
    // Check if driver standings are displayed
    expect(screen.getByText('Max Verstappen')).toBeInTheDocument();
    expect(screen.getByText('Sergio Pérez')).toBeInTheDocument();
    expect(screen.getByText('Red Bull')).toBeInTheDocument();
  });
  
  it('should handle errors during data fetching', async () => {
    const errorMessage = 'Error fetching data:';
    const error = new Error('Request failed with status code 500');
  
    // Mocking the failed data fetching
    mock.onGet('/').reply(500);
  
    // Mock console.error to check if the error message is logged
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
  
    // Render the component
    render(<DriverStanding />);
  
    // Wait for the loading state to be removed
    await waitFor(() => expect(screen.queryByText('Loading...')).not.toBeInTheDocument());
  
    // Check if error message is logged
    expect(console.error).toHaveBeenCalledWith(errorMessage,error);
  
    // Restore console.error
    consoleErrorSpy.mockRestore();
  });
  
  
  });
  
  

