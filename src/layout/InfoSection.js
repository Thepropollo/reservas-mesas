import React from 'react';
import './InfoSection.css';

const InfoSection = ({ imgSrc, title, description }) => (
  <section className="info-section">
    <img src={imgSrc} alt={title} className="info-image" />
    <div className="info-text">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="reserve-button-container">
        <button className="reserve-button">Reserve con nosotros</button>
      </div>
    </div>
  </section>
);

export default InfoSection;