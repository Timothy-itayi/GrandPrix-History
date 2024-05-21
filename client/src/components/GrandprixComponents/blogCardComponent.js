import React from 'react';

const BlogCard = ({ imageUrls = [], title , description}) => {
  return (
    <div className="bg-black overflow-hidden">
      <div className="flex flex-col justify-between p-4 bg-black border border-white border-8 border-double rounded leading-normal">
        <h5 className="mb-2 text-2xl text-center header-font tracking-tight text-white dark:text-white">{title}</h5>
        <div className="mb-3 text-left">
          {description.split('\n').map((paragraph, index) => (
            <p key={index} className="font-normal text-white dark:text-white mb-3">{paragraph}</p>
          ))}
        </div>
        <div className="my-8 p-6 bg-white rounded-lg">
          {Array.isArray(imageUrls) && imageUrls.map((imageUrl, index) => (
            <img
              key={index}
              className={`object-contain w-full h-full ${index > 0 ? '' : ''}`}
              src={imageUrl}
              alt={`${index}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
