// src/components/ServiceCard.jsx
import React from 'react';

const ServiceCard = ({ title, image, features }) => {
  return (
    <div className="card h-100">
      <img
        src={image}
        alt={title}
        className="card-img-top"
        style={{ objectFit: 'cover', height: '200px', width: '100%' }}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        {features.map((feature, index) => (
          <p key={`${title}-${index}`} className="card-text">{feature}</p>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
