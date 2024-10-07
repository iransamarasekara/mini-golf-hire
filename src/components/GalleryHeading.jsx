import React from 'react';
import golfball from "../assets/GolfGround.jpg"; // Import the golf ball image

const AboutUsHeader = () => {
  return (
    <div
      className="relative text-white py-60 bg-center"
      style={{
        backgroundImage: `url(${golfball})`, // Use the imported image as background
        backgroundSize: 'cover', // Ensure the image covers the entire div
        backgroundPosition: 'center', // Center the image
        backgroundColor: 'rgba(34, 197, 94, 0.8)',  // Green color with reduced opacity
      }}
    >
      <div className="absolute inset-0 bg-black opacity-25"></div> {/* Optional semi-transparent overlay */}
      <div className="max-w-5xl container mx-auto px-4 relative z-10"> {/* Set z-index for content */}
        <h1 className="text-6xl font-bold mb-4">Gallery</h1>
        <p className="text-3xl text-lg">Home &gt; Gallery</p>
      </div>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div>
      <AboutUsHeader />
    </div>
  );
};

export default AboutPage;
