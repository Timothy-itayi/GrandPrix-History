import React from 'react';
import { render, fireEvent, within } from '@testing-library/react';
import DriverCard from '../pages/driverCard'; // Make sure to adjust the import path based on your file structure

describe('DriverCard component', () => {

  // Mock Driver Card Data Display
  const mockDriver = {
    imageUrl: '/drivers/maxver01.avif',
    firstName: 'Max',
    lastName: 'Verstappen',
    driver_number: 1,
    teamName: 'Oracle Red Bull Racing',
    standing: {
      points: 169,
      position: 1
    },
    suitColor: '#1E41FF'
  };

  it('renders without crashing', () => {
    render(<DriverCard driver={mockDriver} />);
  });

  // Mocks Driver Card Data is Correct and matching Object property 
  it('displays driver information correctly', () => {
    const { getByAltText, getByText } = render(<DriverCard driver={mockDriver} />);

    const driverImage = getByAltText('Max Verstappen');
    const driverName = getByText('Max Verstappen');
    
    const driverNumberElement = getByText((content, element) => content.includes('Driver Number:')).parentElement;
    const driverNumber = within(driverNumberElement).getByText('1');

    const teamNameElement = getByText((content, element) => content.includes('Team:')).parentElement;
    const teamName = within(teamNameElement).getByText('Oracle Red Bull Racing');

    const pointsElement = getByText((content, element) => content.includes('Points:')).parentElement;
    const points = within(pointsElement).getByText('169');

    const positionElement = getByText((content, element) => content.includes('Position:')).parentElement;
    const position = within(positionElement).getByText('1');

    expect(driverImage).toBeInTheDocument();
    expect(driverName).toBeInTheDocument();
    expect(driverNumber).toBeInTheDocument();
    expect(teamName).toBeInTheDocument();
    expect(points).toBeInTheDocument();
    expect(position).toBeInTheDocument();
  });
      // Mock Border on Hover dade 
  it('changes border color on hover', () => {
    const { getByAltText } = render(<DriverCard driver={mockDriver} />);

    const driverImage = getByAltText('Max Verstappen');
    fireEvent.mouseEnter(driverImage);
    expect(driverImage).toHaveStyle('border: 5px double #1E41FF');

    fireEvent.mouseLeave(driverImage);
    expect(driverImage).toHaveStyle('border: 5px double black');
  });


});
