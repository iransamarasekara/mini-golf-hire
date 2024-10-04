import React from 'react';

const VisionMission = () => {
  return (
    <div className="bg-white py-16 px-4 mx-5">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-15">
        {/* Vision */}
        <div className="bg-green-100 p-8 rounded-lg flex items-start">
          <div className="flex-shrink-0">
            {/* Replace with actual icon */}
            <div className="bg-green-700 text-white p-4 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.567-3 3.5S10.343 15 12 15s3-1.567 3-3.5S13.657 8 12 8z" />
              </svg>
            </div>
          </div>
          <div className="ml-4">
            <h3 className="text-lg leading-6 font-medium text-green-600">Our Vision</h3>
            <p className="mt-2 text-gray-500">
              To be Australia’s leading provider of portable mini golf experiences, bringing fun and connection to every event, big or small.
            </p>
          </div>
        </div>

        {/* Mission */}
        <div className="bg-green-700 p-8 rounded-lg flex items-start">
          <div className="flex-shrink-0">
            {/* Replace with actual icon */}
            <div className="bg-white text-green-600 p-4 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.567-3 3.5S10.343 15 12 15s3-1.567 3-3.5S13.657 8 12 8z" />
              </svg>
            </div>
          </div>
          <div className="ml-4">
            <h3 className="text-lg leading-6 font-medium text-white">Our Mission</h3>
            <p className="mt-2 text-white">
              To deliver safe, high-quality, and affordable mini golf experiences nationwide, with a focus on customer satisfaction, innovation, and community engagement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
