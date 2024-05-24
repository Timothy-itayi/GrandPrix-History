import { renderHook } from '@testing-library/react-hooks';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import useScrollAnimation from '../hooks/useScrollGp'; // Make sure to adjust the import path based on your file structure

jest.mock('react-intersection-observer', () => ({
  useInView: jest.fn(),
}));

jest.mock('framer-motion', () => ({
  useAnimation: jest.fn(),
}));

describe('useScrollAnimation hook', () => {
  const mockRef = { current: {} };
  const mockControls = { start: jest.fn() };

  beforeEach(() => {
    useInView.mockReturnValue({ ref: mockRef, inView: true });
    useAnimation.mockReturnValue(mockControls);
  });

  it('returns ref and controls', () => {
    const { result } = renderHook(() => useScrollAnimation());

    expect(result.current).toEqual([mockRef, mockControls]);
  });

  it('starts animation when in view', () => {
    renderHook(() => useScrollAnimation());

    expect(mockControls.start).toHaveBeenCalled();
  });


});
