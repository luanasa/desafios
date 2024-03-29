import React from 'react';
import './features.css';

function Features({ imageUrl, title, description }) {
  return (
    <div className="features_container">
      <img src={imageUrl} alt="" />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Features;
