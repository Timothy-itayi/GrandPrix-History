import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ScrollToTop from '../LayoutComponents/scrollToTop'; 

describe('ScrollToTop component', () => {
  it('renders without crashing', () => {
    render(<ScrollToTop />);
  });

  it('renders the "Return to Top" button when scrolled down', () => {
    // Mocking window scrollY property to simulate scrolling
    Object.defineProperty(window, 'scrollY', { value: 200 });

    const { getByText } = render(<ScrollToTop />);
    const returnToTopButton = getByText('Return to Top');
    expect(returnToTopButton).toBeInTheDocument();
  });

  it('does not render the "Return to Top" button when not scrolled down', () => {
    // Mocking window scrollY property to simulate no scrolling
    Object.defineProperty(window, 'scrollY', { value: 0 });

    const { queryByText } = render(<ScrollToTop />);
    const returnToTopButton = queryByText('Return to Top');
    expect(returnToTopButton).not.toBeInTheDocument();
  });

  it('scrolls to top when the button is clicked', () => {
    // Mocking scrollTo method
    window.scrollTo = jest.fn();

    const { getByText } = render(<ScrollToTop />);
    const returnToTopButton = getByText('Return to Top');

    fireEvent.click(returnToTopButton);
    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });
});
