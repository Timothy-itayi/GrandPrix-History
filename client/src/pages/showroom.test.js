import React from 'react';
import { render } from '@testing-library/react';
import Showroom from '../Showroom'; // Make sure to adjust the import path based on your file structure

describe('Showroom component', () => {
  it('renders without crashing', () => {
    render(<Showroom />);
  });

  it('renders the showroom card with animation', () => {
    const { getByText } = render(<Showroom />);
    const titleElement = getByText("Ferrari's Favorite: The F2004");
    expect(titleElement).toBeInTheDocument();
  });


});
