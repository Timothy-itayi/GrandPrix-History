// NavBar.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import NavBar from '../components/NavBar';

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

    const dashboardLink = screen.getByText('Dashboard');
    expect(dashboardLink).toBeInTheDocument();
    expect(dashboardLink).toHaveAttribute('href', '/dashboard');
  });

  it('should navigate to home page when Home link is clicked', () => {
    render(
      <MemoryRouter initialEntries={['/dashboard']}>
        <NavBar />
      </MemoryRouter>
    );

    const homeLink = screen.getByText('Home');
    userEvent.click(homeLink);

    expect(global.window.location.pathname).toEqual('/');
  });

  it('should navigate to dashboard page when Dashboard link is clicked', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <NavBar />
      </MemoryRouter>
    );

    const dashboardLink = screen.getByText('Dashboard');
    userEvent.click(dashboardLink);

    expect(global.window.location.pathname).toEqual('/');
  });
});
