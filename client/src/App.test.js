// src/App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

// Mock the pages to avoid loading the actual content
jest.mock('./pages/home', () => () => <div>Home Page</div>);
jest.mock('./pages/grandprix', () => () => <div>Grandprix Page</div>);
jest.mock('./pages/about', () => () => <div>About Page</div>);
jest.mock('./components/LayoutComponents/navBar', () => () => <div>NavBar</div>);

test('renders the home page by default', () => {
  render(
    <Router>
      <App />
    </Router>
  );

  expect(screen.getByText('Home Page')).toBeInTheDocument();
});
 
test('renders the grandprix page when navigating to /grandprix', () => {
  window.history.pushState({}, 'Test page', '/grandprix');

  render(
    <Router>
      <App />
    </Router>
  );

  expect(screen.getByText('Grandprix Page')).toBeInTheDocument();
});

test('renders the  page when navigating to /about', () => {
  window.history.pushState({}, 'Test page', '/about');

  render(
    <Router>
      <App />
    </Router>
  );

  expect(screen.getByText('About Page')).toBeInTheDocument();
});
