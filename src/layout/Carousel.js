import React from 'react';
import './Carousel.css';

const Carousel = () => (
  <div className="carousel-container">
    <div className="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/china.png" alt="Imagen 1" />
        </div>
        <div className="carousel-item">
          <img src="/italia.png" alt="Imagen 2" />
        </div>
        <div className="carousel-item">
          <img src="/sushi.png" alt="Imagen 3" />
        </div>
      </div>
      <div className="carousel-controls">
        <button className="prev"><i className="fas fa-chevron-left"></i></button>
        <button className="next"><i className="fas fa-chevron-right"></i></button>
      </div>
      <div className="carousel-indicators">
        <button className="active"></button>
        <button></button>
        <button></button>
      </div>
    </div>
  </div>
);

export default Carousel;