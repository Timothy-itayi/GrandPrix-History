import React from 'react';

import BlogCard from '../components/GrandprixComponents/blogCardComponent';

const Grandprix = () => {
  return (
    <div className="flex justify-center">
      <div className="max-w-2xl px-4">
        <h1 className="text-3xl font-bold mb-4">Exploring Formula 1 Tracks for 2024</h1>
        <p className="text-lg mb-6">
          Join us on an exciting journey as we explore the iconic Formula 1 tracks scheduled for the 2024 season. From the historic streets of Monaco to the thrilling corners of Suzuka, each track offers its own unique challenges and breathtaking moments. Let's dive into the world of Formula 1 and discover the tracks that will define the upcoming season.
        </p>
        <div className="overflow-hidden animate-fade-up ">
        <div>
  <BlogCard 
  imageUrls={[
    "/f1Tracks/AusGp.png",
  ]}
  title="ausgp"
  description="track ">

  </BlogCard>
</div>
   
        </div>
      </div>
    </div>
  );
};



export default Grandprix;
