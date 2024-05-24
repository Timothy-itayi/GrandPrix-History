import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import DriverCard from '../pages/driverCard'; // Make sure to adjust the import path based on your file structure

describe('DriverCard component', () => {
  const mockDriver = {
    imageUrl: '/path/to/image.jpg',
    firstName: 'John',
    lastName: 'Doe',
    driver_number: 7,
    teamName: 'Team A',
    standing: {
      points: 100,
      position: 1
    },
    suitColor: 'red'
  };

  it('renders without crashing', () => {
    render(<DriverCard driver={mockDriver} />);
  });

  it('displays driver information correctly', () => {
    const { getByAltText, getByText } = render(<DriverCard driver={mockDriver} />);

    const driverImage = getByAltText('John Doe');
    const driverName = getByText('John Doe');
    const driverNumber = getByText('Driver Number: 7');
    const teamName = getByText('Team: Team A');
    const points = getByText('Points: 100');
    const position = getByText('Position: 1');

    expect(driverImage).toBeInTheDocument();
    expect(driverName).toBeInTheDocument();
    expect(driverNumber).toBeInTheDocument();
    expect(teamName).toBeInTheDocument();
    expect(points).toBeInTheDocument();
    expect(position).toBeInTheDocument();
  });

  it('changes border color on hover', () => {
    const { getByAltText } = render(<DriverCard driver={mockDriver} />);

    const driverImage = getByAltText('John Doe');
    fireEvent.mouseEnter(driverImage);
    expect(driverImage).toHaveStyle('border: 5px double red');

    fireEvent.mouseLeave(driverImage);
    expect(driverImage).toHaveStyle('border: 5px double black');
  });

  // You can write more specific tests for onClick if needed
});
