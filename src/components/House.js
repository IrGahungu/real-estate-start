import React, { useState } from 'react';
import { BiBed, BiBath, BiArea } from 'react-icons/bi';

const House = ({ house }) => {
  const { image, type, country, address, number, bedrooms, bathrooms, surface, price } = house;

  // Initialize a state variable to track whether the card is being hovered
  const [isHovered, setIsHovered] = useState(false);

  // Style for the card container
  const cardStyle = {
    width: '100%',
    height: '400px',
    backgroundColor: 'white',
    boxShadow: isHovered ? '0 8px 12px rgba(0, 0, 0, 0.2)' : '0 4px 6px rgba(0, 0, 0, 0.1)',
    borderRadius: '30px',
    padding: '1rem',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    transition: 'box-shadow 0.3s ease-in-out',
  };

  // Style for the container that wraps type, country, and image
  const infoContainerStyle = {
    marginBottom: '1rem', // Add a fixed margin at the bottom
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center horizontally
    textAlign: 'center', // Center text horizontally
  };

  // Style for the image with rounded corners
  const imageStyle = {
    maxWidth: '100%',
    maxHeight: '200px',
    margin: '0 auto',
    display: 'block',
    borderRadius: '15px', // Add rounded corners
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)} // Set isHovered to true on mouse enter
      onMouseLeave={() => setIsHovered(false)} // Set isHovered to false on mouse leave
    >
      {/* Container for type, country, and image */}
      <div style={infoContainerStyle}>
        <div className='mb-4 flex gap-x-2 text-sm'>
          <div className='bg-pink-600 rounded-full text-white px-3'>{type}</div>
          <div className='bg-purple-700 rounded-full text-white px-3'>{country}</div>
        </div>
        <img style={imageStyle} src={image} alt='' />
      </div>
      <div>
        <div className='flex gap-x-4 my-4 bg-green-500 rounded-full text-white px-3 flex'>{number}</div>
      </div>
      <div className='text-lg font-semibold max-w-[260px]'>{address}</div>
      <div className='text-lg font-semibold text-blue-600 mb-4'>{price}</div>
    </div>
  );
};

export default House;
