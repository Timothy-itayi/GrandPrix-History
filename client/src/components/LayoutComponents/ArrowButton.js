import React from 'react';
import PropTypes from 'prop-types';

const ArrowButton = ({ direction, onClick, className = '' }) => {
  const isLeft = direction === 'left';
  return (
    <div
      onClick={onClick}
      className={`flex items-center justify-center p-2 bg-gray-800 rounded-full cursor-pointer ${className}`}
      role="button"
      aria-label={isLeft ? 'Previous' : 'Next'}
    >
      {isLeft ? (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
        </svg>
      ) : (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
        </svg>
      )}
    </div>
  );
};

ArrowButton.propTypes = {
  direction: PropTypes.oneOf(['left', 'right']).isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default ArrowButton;
