import React from "react";

const Card = ({ title, description, price, image }) => {
  return (
    <>
      <div className="bg-white shadow-md rounded-lg p-4">
        <img
          src={image}
          alt={image.title}
          className="overflow-hidden object-center"
        />
        <div className="w-full">
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="text-gray-600">{description}</p>
          <p className="text-green-500 font-bold">${price}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
