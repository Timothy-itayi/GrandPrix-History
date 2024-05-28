import React from 'react';
import { render } from '@testing-library/react';
import DriverStanding from '../pages/driverStanding'


// Checks whether  Driver standing Component Renders 
describe('DriverStanding Component', () => {
  it('renders without crashing', () => {
    render(<DriverStanding />);
  });
// Checks if it displays the Header 
  it('displays the heading "Driver Standings"', () => {
    const { getByText } = render(<DriverStanding />);
    const headingElement = getByText('Driver Standings');
    expect(headingElement).toBeInTheDocument();
  });
 // Checks if it displays the Sub Header 
  it('displays the subheading with correct content', () => {
    const { getByText } = render(<DriverStanding />);
    const subheadingElement = getByText(/The Current Drivers Standings of the 2024 Formula 1 Season/i);
    expect(subheadingElement).toBeInTheDocument();
  });
  // Check if it displays the component 
  it('contains the DriverStandings component', () => {
    const { container } = render(<DriverStanding />);
    const driverStandingsElement = container.querySelector('.bg-black.shadow-md');
    expect(driverStandingsElement).toBeInTheDocument();
  });
});
