import React from 'react';
import { render } from '@testing-library/react';
import ShowroomCarousel from '../ShowroomComponents/showroomCarousel'; // Make sure to adjust the import path based on your file structure

describe('ShowroomCarousel component', () => {
  const mockImageUrls = [
    '/path/to/image1.jpg',
    '/path/to/image2.jpg',
    '/path/to/image3.jpg',
  ];

  it('renders without crashing', () => {
    render(<ShowroomCarousel imageUrls={mockImageUrls} />);
  });

  it('renders correct number of images', () => {
    const { getAllByAltText } = render(<ShowroomCarousel imageUrls={mockImageUrls} />);
    const imageElements = getAllByAltText(/\/path\/to\/image\d\.jpg/);
    expect(imageElements.length).toBe(mockImageUrls.length);
  });

  it('displays images with correct URLs', () => {
    const { getAllByAltText } = render(<ShowroomCarousel imageUrls={mockImageUrls} />);
    const imageElements = getAllByAltText(/\/path\/to\/image\d\.jpg/);
    
    mockImageUrls.forEach((imageUrl, index) => {
      expect(imageElements[index]).toHaveAttribute('src', imageUrl);
    });
  });


});
