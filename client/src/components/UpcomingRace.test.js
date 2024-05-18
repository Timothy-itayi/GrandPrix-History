import React from 'react';
import { render, screen } from '@testing-library/react';
import UpcomingRace from '../components/UpcomingRace';
import '@testing-library/jest-dom/extend-expect';

describe('UpcomingRace', () => {
  const today = new Date();
  const upcomingRace = {
    name: 'Emilia Romagna Grand Prix',
    date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7).toISOString(),
    location: 'Imola Circuit, Imola',
  };
 
  it('should render without crashing', () => {
    render(<UpcomingRace races={[upcomingRace]} />);
  });

  it('should display upcoming race information', () => {
    render(<UpcomingRace races={[upcomingRace]} />);
    expect(screen.getByText(/Race Weekend Schedule/)).toBeInTheDocument();
  });

  it('should display the correct date for the upcoming race', () => {
    render(<UpcomingRace races={[upcomingRace]} />);
  
    const expectedDate = new Date(upcomingRace.date);
    const expectedDateString = `${expectedDate.getDate().toString().padStart(2, '0')}/${(expectedDate.getMonth() + 1).toString().padStart(2, '0')}/${expectedDate.getFullYear()}`;
  
    // Use custom matcher to match the date text
    expect(screen.getByText((content, element) => {
      return element.tagName.toLowerCase() === 'p' && content.includes(expectedDateString);
    })).toBeInTheDocument();
  });
  
  

  it('should display a message when there is no upcoming race', () => {
    render(<UpcomingRace races={[]} />);
    expect(screen.queryByText('Race Weekend Schedule')).not.toBeInTheDocument();
  });
});
