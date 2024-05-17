// src/App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

// Mock the pages to avoid loading the actual content
jest.mock('./pages/home', () => () => <div>Home Page</div>);
jest.mock('./pages/SelectionPage', () => () => <div>Selection Page</div>);
jest.mock('./pages/dashboard', () => () => <div>Dashboard Page</div>);
jest.mock('./components/navBar', () => () => <div>NavBar</div>);

test('renders the home page by default', () => {
  render(
    <Router>
      <App />
    </Router>
  );

  expect(screen.getByText('Home Page')).toBeInTheDocument();
});

test('renders the selection page when navigating to /selection', () => {
  window.history.pushState({}, 'Test page', '/selection');

  render(
    <Router>
      <App />
    </Router>
  );

  expect(screen.getByText('Selection Page')).toBeInTheDocument();
});

test('renders the dashboard page when navigating to /dashboard', () => {
  window.history.pushState({}, 'Test page', '/dashboard');

  render(
    <Router>
      <App />
    </Router>
  );

  expect(screen.getByText('Dashboard Page')).toBeInTheDocument();
});
