import React, { useState } from "react";
import "./StarRating.css";

const StarRating = ({ totalStars = 5, initialRating = 0, color = "gold" }) => {
  const [rating, setRating] = useState(initialRating);
  const [hoverRating, setHoverRating] = useState(undefined);

  const handleClick = (index) => {
    setRating(index + 1);
  };

  const handleMouseEnter = (index) => {
    setHoverRating(index + 1);
  };

  const handleMouseLeave = () => {
    setHoverRating(undefined);
  };

  const createStars = () => {
    const stars = [];
    for (let i = 0; i < totalStars; i++) {
      stars.push(
        <span
          key={i}
          className={`star ${i < (hoverRating || rating) ? "filled" : ""}`}
          onClick={() => handleClick(i)}
          onMouseEnter={() => handleMouseEnter(i)}
          onMouseLeave={handleMouseLeave}
        >
          &#9733;
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="star-rating">
      <div className={`stars ${color}`}>{createStars()}</div>
      <p className="rating-text">
        {rating} / {totalStars} Stars
      </p>
    </div>
  );
};

const StarRatingExamples = () => {
  return (
    <div className="star-rating-examples">
      <h2>Star Rating Examples</h2>
      <StarRating totalStars={5} initialRating={3} color="gold" />
      <StarRating totalStars={5} initialRating={0} color="blue" />
    </div>
  );
};

export default StarRatingExamples;
