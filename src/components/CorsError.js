import React from 'react';

const CorsErrorBox = () => {
  return (
    <div className="max-w-md mx-auto p-8 bg-red-100 border border-red-400 rounded-md shadow-md mt-10">
      <div className="flex items-center">
        <div className="bg-red-400 text-white rounded-full p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </div>
        <div className="ml-4">
          <h1 className="text-lg font-semibold text-red-800">Connection is Weak|| not Connected !</h1>
                  <p className="text-sm text-red-600">The Internet connection Is Down. Please check and try again.</p>

        </div>
      </div>
    </div>
  );
};

export default CorsErrorBox;
