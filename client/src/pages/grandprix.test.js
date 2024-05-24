import React from 'react';
import { render } from '@testing-library/react';
import Grandprix from '../pages/grandprix';

describe('Grandprix Component', () => {
  it('renders without crashing', () => {
    render(<Grandprix />);
  });

  it('displays the heading "Formula 1 Grandprix"', () => {
    const { getByText } = render(<Grandprix />);
    const headingElement = getByText('Formula 1 Grandprix');
    expect(headingElement).toBeInTheDocument();
  });

  it('contains at least one BlogCard component', () => {
    const { container } = render(<Grandprix />);
    const blogCard = container.querySelector('.blog-card');
    expect(blogCard).toBeInTheDocument();
  });


});
