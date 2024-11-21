import React, { useState } from "react";
import "./CarouselSlider.css";

const CarouselSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="carousel-container">
      <div className="carousel-slider">
        <div className="carousel-prev" onClick={prevSlide}>
          &#10094;
        </div>
        <div className="carousel-images">
          <div
            className="carousel-image"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div key={index} className="image-slide">
                <img src={image} alt={`carousel-${index}`} />
              </div>
            ))}
          </div>
        </div>
        <div className="carousel-next" onClick={nextSlide}>
          &#10095;
        </div>
      </div>
    </div>
  );
};

const CarouselSliderExample = () => {
  const images = [
    "https://via.placeholder.com/600x400?text=Image+1",
    "https://via.placeholder.com/600x400?text=Image+2",
    "https://via.placeholder.com/600x400?text=Image+3",
    "https://via.placeholder.com/600x400?text=Image+4",
  ];

  return (
    <div className="carousel-slider-example">
      <h2>Awesome Carousel Slider</h2>
      <CarouselSlider images={images} />
    </div>
  );
};

export default CarouselSliderExample;
