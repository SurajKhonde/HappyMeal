import React from 'react';

const CenteredErrorCard = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-orange-200 border border-pink-500 text-indigo-500 px-6 py-4 rounded-md shadow-md">
        <strong className="font-bold text-lg mb-2 text-center text-zinc-950"> 🙈  Oops! 🤷</strong>
        <p className="text-sm  text-zinc-900">
          Please activate CORS on your laptop to resolve this issue.
        </p>
        <div className="mt-3 text-right">
          <a
            href="https://chromewebstore.google.com/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-800 hover:text-pink-800"
          >
            Install CORS extension
          </a>
        </div>
      </div>
    </div>
  );
};

export default CenteredErrorCard;