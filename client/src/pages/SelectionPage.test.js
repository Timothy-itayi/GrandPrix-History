// selectionPage.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SelectionPage from './SelectionPage';

// Mock the drivers data
jest.mock('../models/drivers', () => [

    { id: 2, name: 'Sergio Perez', team: 'Red Bull Racing',image: require('../images/drivers/serper01.avif')},
    { id: 3, name: 'Charles Leclerc', team: 'Ferrari',image: require('../images/drivers/chalec01.avif') },
    { id: 4, name: 'Lando Norris', team: 'McLaren',image: require('../images/drivers/lannor01.avif')},
]);

describe('SelectionPage', () => {
  it('should add a driver to selectedDrivers when selected', () => {
    const { getByText } = render(<SelectionPage />);
    const selectButton = getByText('Select');

    fireEvent.click(selectButton); // Select the first driver

    expect(selectButton).toHaveTextContent('Deselect'); // Button text should change to "Deselect"
  });

  it('should remove a driver from selectedDrivers when deselected', () => {
    const { getByText } = render(<SelectionPage />);
    const selectButton = getByText('Select');

    fireEvent.click(selectButton); // Select the first driver
    fireEvent.click(selectButton); // Deselect the first driver

    expect(selectButton).toHaveTextContent('Select'); // Button text should change back to "Select"
  });

  it('should disable "Select" button after selecting three drivers', () => {
    const { getAllByText } = render(<SelectionPage />);
    const selectButtons = getAllByText('Select');

    selectButtons.forEach((button, index) => {
      fireEvent.click(button); // Select each driver
      if (index < 2) {
        expect(button).toBeEnabled(); // Buttons should be enabled before selecting three drivers
      }
    });

    expect(selectButtons[2]).toBeDisabled(); // Third button should be disabled after selecting three drivers
  });
});
