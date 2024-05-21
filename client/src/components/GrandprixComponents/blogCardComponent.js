import React, { useState } from 'react';
import CustomCarousel from '../LayoutComponents/CustomCarousel'

const BlogCard = ({ imageUrls = [], title, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    const truncated = text.slice(0, maxLength);
    const lastSpaceIndex = truncated.lastIndexOf(' ');
    return truncated.slice(0, lastSpaceIndex) + '...';
  };

  const truncatedDescription = truncateText(description, 100);

  return (
    <div className="bg-black">
      <div>
        <div className=" p-4 bg-white rounded-lg">
          <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-black dark:text-black">
            {title}
          </h5>
          {/* Use the CustomCarousel component */}
          <div className="h-96 w-full"  >
            <CustomCarousel imageUrls={imageUrls} />
          </div>

          {/* Optional: Add buttons */}
          <div className="mb-3 text-left">
            <p className="font-normal pt-4 text-black dark:text-black mb-3">
              {isExpanded ? description : truncatedDescription}
            </p>
            {description.length > 100 && (
              <button onClick={toggleDescription} className="text-blue-500 hover:underline">
                {isExpanded ? 'See less' : 'See more'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
