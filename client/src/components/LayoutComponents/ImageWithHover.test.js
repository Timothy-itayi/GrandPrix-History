import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ImageWithHover from '../LayoutComponents/ImageWithHover'; // Make sure to adjust the import path based on your file structure

describe('ImageWithHover component', () => {
  it('renders without crashing', () => {
    render(
      <ImageWithHover
        src1="/path/to/image1.jpg"
        to1="/link1"
        src2="/path/to/image2.jpg"
        to2="/link2"
        alt="Test Image"
      />
    );
  });

  it('toggles image source and link destination on hover', () => {
    const { getByAltText } = render(
      <ImageWithHover
        src1="/path/to/image1.jpg"
        to1="/link1"
        src2="/path/to/image2.jpg"
        to2="/link2"
        alt="Test Image"
      />
    );

    const image = getByAltText('Test Image');
    fireEvent.mouseEnter(image);

    expect(image).toHaveAttribute('src', '/path/to/image2.jpg');
    expect(image.parentElement).toHaveAttribute('href', '/link2');

    fireEvent.mouseLeave(image);

    expect(image).toHaveAttribute('src', '/path/to/image1.jpg');
    expect(image.parentElement).toHaveAttribute('href', '/link1');
  });
});
