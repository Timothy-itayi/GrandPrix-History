import { useState } from 'react';
import { Link } from 'react-router-dom';
const ImageWithHover = ({ src1, to1, src2, to2, alt }) => {
  const [isActive, setIsActive] = useState(false);

  const handleHover = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className="relative overflow-hidden rounded-full w-32 h-32  animate-easein"
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      onClick={() => setIsActive(!isActive)}
    >
      <Link to={isActive ? to2 : to1}>
        <img
          src={isActive ? src2 : src1}
          alt={alt}
          className="object-cover transition-opacity duration-1000 w-full h-full"
        />
      </Link> 
    </div>
  );
};

export default ImageWithHover;
