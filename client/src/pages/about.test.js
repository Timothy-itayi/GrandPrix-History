import React from 'react';
import { render } from '@testing-library/react';
import About from '../pages/about';

describe('About Component', () => {
  it('renders without crashing', () => {
    render(<About />);
  });

  it('displays the heading "About Me"', () => {
    const { getByText } = render(<About />);
    const headingElement = getByText('About Me');
    expect(headingElement).toBeInTheDocument();
  });

  it('displays the paragraphs with correct content', () => {
    const { getByText } = render(<About />);
    const paragraphs = [
      "Hey there! I'm Timothy Itayi, a motorsport fan and the person behind GPHistory. This web app is all about celebrating the thrilling moments of Grand Prix history. I created GPHistory to share my passion for motorsport and give fans a place to dive into the rich heritage of Formula 1.",
      "I've been an F1 fan for years, and I’ve put together a collection of Tracks and Iconic cars that capture the essence of motorsport greatness.",
      "When I'm not deep into the world of motorsport, I'm usually coding, sim racing, or working on new features for GPHistory. I love the rush of high-speed racing and connecting with fellow fans who share my enthusiasm for the sport. Through GPHistory, I hope to celebrate the legacy of motorsport and inspire future racing enthusiasts.",
      "Besides motorsport, I’m also a Graduate Web Developer. If you want to see more of my work, check out my portfolio here.",
      "Let's connect and enjoy the ride through motorsport history with GPHistory!",
      "Special thanks to OpenF1 API for providing the current session data, P10 for the inspiration, HyperRace API for the current standings, ElevenLabs from the Ai voice  and my girlfriend Gracie for helping with some of the design."
    ];

    paragraphs.forEach((paragraph) => {
      const paragraphElement = getByText(paragraph);
      expect(paragraphElement).toBeInTheDocument();
    });
  });

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
      expect(linkElement.getAttribute('href')).toBe(href);
    });
  });
});
