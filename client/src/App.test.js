import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import DriverStanding from './pages/drivers';
import Home from './pages/home';

test('renders welcome message', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );
  const welcomeElement = screen.getByText(/welcome to hyper/i);
  expect(welcomeElement).toBeInTheDocument();
});

test('renders home page content', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </MemoryRouter>
  );
  const homeElement = screen.getByText(/this is the home page/i);
  expect(homeElement).toBeInTheDocument();
});

test('renders driver standings page', async () => {
  render(
    <MemoryRouter initialEntries={['/drivers']}>
      <Routes>
        <Route path="/drivers" element={<DriverStanding />} />
      </Routes>
    </MemoryRouter>
  );
  const loadingElement = screen.getByText(/loading.../i);
  expect(loadingElement).toBeInTheDocument();

  // Optionally, you could wait for the data to load and check for specific content
  // const driverElement = await screen.findByText(/driver name or team name/i);
  // expect(driverElement).toBeInTheDocument();
});

