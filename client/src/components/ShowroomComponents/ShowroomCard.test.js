import React from 'react';
import { render } from '@testing-library/react';
import ShowroomCard from '../ShowroomComponents/ShowroomCard'; // Make sure to adjust the import path based on your file structure

describe('ShowroomCard component', () => {
  const mockImageUrls = [
    '/path/to/image1.jpg',
    '/path/to/image2.jpg',
    '/path/to/image3.jpg',
  ];
  const mockTitle = "Test Title";

  it('renders without crashing', () => {
    render(<ShowroomCard imageUrls={mockImageUrls} title={mockTitle} />);
  });

  it('displays title correctly', () => {
    const { getByText } = render(<ShowroomCard imageUrls={mockImageUrls} title={mockTitle} />);
    const titleElement = getByText(mockTitle);
    expect(titleElement).toBeInTheDocument();
  });

  it('renders showroom carousel with correct image URLs', () => {
    const { getByAltText } = render(<ShowroomCard imageUrls={mockImageUrls} title={mockTitle} />);

    mockImageUrls.forEach(imageUrl => {
      const imageElement = getByAltText(mockTitle);
      expect(imageElement).toHaveAttribute('src', imageUrl);
    });
  });

  // You can write more specific tests for different scenarios if needed
});
