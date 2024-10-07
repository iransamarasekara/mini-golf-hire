import React from 'react';
import golfball from "../assets/Golf2.jpg"; // Import the golf ball image

const AboutUsHeader = () => {
    return (
      <div
        className="relative text-white h-96 bg-center" // Use fixed height for full image
        style={{
          backgroundImage: `url(${golfball})`, // Use the imported image as background
          backgroundSize: 'cover', // Ensure the image covers the entire div
          backgroundPosition: 'center', // Center the image
          backgroundColor: 'rgba(34, 197, 94, 0.8)',  // Green color with reduced opacity
        }}
      >
        <div className="absolute inset-0 bg-black opacity-25"></div> {/* Optional semi-transparent overlay */}
        
        {/* Text container moved to bottom without changing image size */}
        <div className="max-w-5xl container mx-auto px-4 absolute bottom-10 left-0 right-0 z-50 text-left"> 
          <h1 className="text-6xl font-bold mb-4">About us</h1>
          <p className="text-3xl text-lg">Home &gt; About us</p>
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
