import React from 'react';
import { render } from '@testing-library/react';
import About from '../pages/about'; 

describe('About Component', () => {
  it('renders without crashing', () => {
    render(<About />);
  });
      // Checks to see if Text matches in About page including the href links 
  it('displays the paragraphs with correct content', () => {
    const { getByText } = render(<About />);

    const paragraph1 = getByText(/Hey there! I'm Timothy Itayi, a motorsport fan and the person behind/i);
    const paragraph2 = getByText(/I've been an F1 fan for years, and I’ve put together a collection of/i);
    const paragraph3 = getByText(/When I'm not deep into the world of motorsport, I'm usually coding, sim racing, or working on new features for GPHistory/i);
    const paragraph4 = getByText(/Besides motorsport, I’m also a Graduate Web Developer/i);
    const paragraph5 = getByText(/Let's connect and enjoy the ride through motorsport history with GPHistory!/i);
    const paragraph6 = getByText(/I would like to thank OpenF1 API for providing the current session data/i);

    expect(paragraph1).toBeInTheDocument();
    expect(paragraph2).toBeInTheDocument();
    expect(paragraph3).toBeInTheDocument();
    expect(paragraph4).toBeInTheDocument();
    expect(paragraph5).toBeInTheDocument();
    expect(paragraph6).toBeInTheDocument();
  });
        // Include Href link in text and splits them up to check Href on their own 
  it('contains hyperlinks with correct href attributes', () => {
    const { getByText } = render(<About />);
    const links = [
      { text: 'GPHistory', href: 'https://timothyitayi.com/' },
      { text: 'Tracks', href: '/grandprix' },
      { text: 'Iconic cars', href: '/showroom' },
      { text: 'here', href: 'https://timothyitayi.com/' },
    ];

    links.forEach(({ text, href }) => {
      const linkElement = getByText(text);
      expect(linkElement).toBeInTheDocument();
      expect(linkElement.closest('a')).toHaveAttribute('href', href);
    });
  });
});
