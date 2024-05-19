import React from 'react';

const Circle = ({ circumference }) => {
  const radius = circumference / (2 * Math.PI);

  return (
    <svg width={radius * 2 + 10} height={radius * 2 + 10}>
      <circle
        cx={radius + 5}
        cy={radius + 5}
        r={radius}
        stroke="blue"
        strokeWidth="4"
        fill="none"
      />
    </svg>
  );
};

export default Circle;
