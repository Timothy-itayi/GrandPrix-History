// home.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter as Router
import Home from './home';

describe('Home', () => {
  it('should render without crashing', () => {
    render(
      <Router>
        <Home />
      </Router>
    );
  });

  it('should contain the expected header and sections', () => {
    render(
      <Router>
        <Home />
      </Router>
    );

    expect(screen.getByText('Welcome to Hyper Fantasy League')).toBeInTheDocument(); // Header
    expect(screen.getByText('Pick your Point')).toBeInTheDocument(); // First section title
    expect(screen.getByText('Pick your Podium')).toBeInTheDocument(); // Second section title
  });

  it('should render "Get Started" and "Pick Your Podium" buttons', () => {
    render(
      <Router>
        <Home />
      </Router>
    );

    expect(screen.getByText('Get Started')).toBeInTheDocument(); // "Get Started" button
    expect(screen.getByText('Pick Your Podium')).toBeInTheDocument(); // "Pick Your Podium" button
  });

  it('should link "Pick Your Podium" button to the selection page', () => {
    render(
      <Router>
        <Home />
      </Router>
    );

    const pickYourPodiumButton = screen.getByText('Pick Your Podium');
    expect(pickYourPodiumButton.closest('a')).toHaveAttribute('href', '/selection'); // Verify the link
  });
});
