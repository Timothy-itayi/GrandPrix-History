import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RaceList from '../components/raceList';
import '@testing-library/jest-dom/extend-expect';


describe('RaceList', () => {
  const pastRaces = [
    { id: 1, name: 'Bahrain Grand Prix', date: '2024-03-02', location: 'Bahrain International Circuit, Sakhir' },
    { id: 2, name: 'Saudi Arabian Grand Prix', date: '2024-03-09', location: 'Jeddah Corniche Circuit, Jeddah' },
  ];

  const futureRaces = [
    { id: 20, name: 'Mexico City Grand Prix', date: '2024-10-27', location: 'Autódromo Hermanos Rodríguez, Mexico City' },
    { id: 21, name: 'São Paulo Grand Prix', date: '2024-11-03', location: 'Interlagos Circuit, São Paulo' },
  ];

  it('should render without crashing', () => {
    render(<RaceList title="Past Races" races={pastRaces} />);
  });

  it('should display the title', () => {
    render(<RaceList title="Future Races" races={futureRaces} />);
    expect(screen.getByText('Future Races')).toBeInTheDocument();
  });

  it('should toggle the dropdown when the button is clicked', () => {
    render(<RaceList title="Past Races" races={pastRaces} />);
    
    const toggleButton = screen.getByText('Past Races');
    fireEvent.click(toggleButton);
    expect(screen.getByText('Saudi Arabian Grand Prix')).toBeInTheDocument();

    fireEvent.click(toggleButton);
    expect(screen.queryByText('Bahrain Grand Prix')).not.toBeInTheDocument();
  });

  it('should display the list of past races when dropdown is open', () => {
    render(<RaceList title="Past Races" races={pastRaces} />);

    const toggleButton = screen.getByText('Past Races');
    fireEvent.click(toggleButton);

    expect(screen.getByText('Bahrain Grand Prix')).toBeInTheDocument();
    expect(screen.getByText('Saudi Arabian Grand Prix')).toBeInTheDocument();
  });

  it('should display the list of future races when dropdown is open', () => {
    render(<RaceList title="Future Races" races={futureRaces} />);

    const toggleButton = screen.getByText('Future Races');
    fireEvent.click(toggleButton);

    expect(screen.getByText('Mexico City Grand Prix')).toBeInTheDocument();
    expect(screen.getByText('São Paulo Grand Prix')).toBeInTheDocument();
  });

  it('should display a message when there are no races available', () => {
    render(<RaceList title="No Races" races={[]} />);

    const toggleButton = screen.getByText('No Races');
    fireEvent.click(toggleButton);

    expect(screen.getByText('No races available.')).toBeInTheDocument();
  });
});
