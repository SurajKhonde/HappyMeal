import React from 'react';
import ContentLoader from 'react-content-loader';

export const ShimmerEffect = () => {
  return (
    <ContentLoader
      speed={2}
      width={250}
      height={300}
      viewBox="0 0 250 300"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="10" ry="10" width="100%" height="150" />
      <rect x="0" y="160" rx="5" ry="5" width="100%" height="10" />
      <rect x="0" y="180" rx="5" ry="5" width="80%" height="10" />
      <rect x="0" y="200" rx="5" ry="5" width="90%" height="10" />
      <rect x="0" y="220" rx="5" ry="5" width="70%" height="10" />
      <rect x="0" y="240" rx="5" ry="5" width="60%" height="10" />
    </ContentLoader>
  );
};





const Shimmer = () => {
  return (
    <div className=' mt-7 grid grid-cols-3'>
      <div>{ <ShimmerEffect/>}</div>
      <div>{ <ShimmerEffect/>}</div>
      <div>{ <ShimmerEffect/>}</div>
      <div>{ <ShimmerEffect/>}</div>
      <div>{ <ShimmerEffect/>}</div>
      <div>{ <ShimmerEffect/>}</div>
      <div>{ <ShimmerEffect/>}</div>
      <div>{ <ShimmerEffect/>}</div>
      <div>{ <ShimmerEffect/>}</div>
      <div>{ <ShimmerEffect/>}</div>
      <div>{ <ShimmerEffect/>}</div>
      <div>{ <ShimmerEffect/>}</div>
      <div>{ <ShimmerEffect/>}</div>
      <div>{ <ShimmerEffect/>}</div>
      <div>{ <ShimmerEffect/>}</div>
      <div>{ <ShimmerEffect/>}</div>
      <div>{ <ShimmerEffect/>}</div>
      <div>{ <ShimmerEffect/>}</div>
    </div>
  );
};

export default Shimmer;
