import React from "react";
const Starating = ({ rating }) => {
  const totalStars = 5;

  // Create an array of stars (filled, half-filled, or empty)
  const stars = Array.from({ length: totalStars }, (_, index) => {
    const number = index + 1;
    if (rating >= number - 0.75) {
      return "★"; // Full star
    } else if (rating >= number - 0.25) {
      return "⭐"; // Half star (use appropriate character or icon)
    }
    return "☆"; // Empty star
  });

  return (
    <div className="star-rating">
      {stars.map((star, index) => (
        <span key={index}>{star}</span>
      ))}
    </div>
  );
};
export default Starating;
