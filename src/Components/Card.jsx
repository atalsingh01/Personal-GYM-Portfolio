import React from 'react';

import { useNavigate } from "react-router-dom";
const Card = ({ title, description, image,type }) => {
  const navigate=useNavigate();

  const handleClick=()=>
  {
    navigate(`/services/${type}`)
  }
  return (
    <div onClick={handleClick} className="cursor-pointer max-w-sm rounded overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 z-10">
      <img className="w-full h-96" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          {description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#fitness</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#gym</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#workout</span>
      </div>
    </div>
  );
};

export default Card;
