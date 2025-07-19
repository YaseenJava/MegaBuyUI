import React from 'react';

export default function ProductSkelton() {
  // Number of skeleton cards to show
  const cards = Array.from({ length: 8 });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {cards.map((_,index) => (
        <div
          key={index}
          className="animate-pulse flex flex-col space-y-4 bg-white p-4 rounded-xl shadow"
        >
          <div className="bg-gray-300 h-40 w-full rounded-md" />
          <div className="h-4 bg-gray-300 rounded w-3/4" />
          <div className="h-4 bg-gray-300 rounded w-1/2" />
          <div className="h-10 bg-gray-300 rounded" />
        </div>
      ))}
    </div>
  );
}
