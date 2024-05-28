// NavBar.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import NavBar from '../LayoutComponents/navBar';

describe('NavBar', () => {
  it('should render without crashing', () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
  });
   
  it('should contain a link to the home page', () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );

    const homeLink = screen.getByText('Home');
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href', '/');
  });

  it('should contain a link to the dashboard page', () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );

    const grandprixLink = screen.getByText('Grandprix');
    expect(grandprixLink).toBeInTheDocument();
    expect(grandprixLink).toHaveAttribute('href', '/grandprix');
  });
})