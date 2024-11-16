// Components/Cards/Cards.jsx
import React from "react";
import "./Cards.css";

const Cards = () => {
  const handleActionClick = (message) => {
    alert(message);
  };

  const floatingCardsData = [
    {
      title: "Floating Card 1",
      text: "This is a floating card with hover effects.",
      image: "https://via.placeholder.com/300x200",
      actionText: "Explore",
    },
    {
      title: "Floating Card 2",
      text: "Another floating card for a modern look.",
      image: "https://via.placeholder.com/300x200",
      actionText: "Discover",
    },
  ];

  return (
    <>
      {/* Regular Cards */}
      <div className="cards-container">
        {/* Card 1 */}
        <div className="card">
          <img
            src="https://via.placeholder.com/300"
            alt="Card 1"
            className="card-image"
          />
          <div className="card-content">
            <h3 className="card-title">Card Title 1</h3>
            <p className="card-text">
              This is a simple card with an image, title, and text.
            </p>
          </div>
          <div className="card-actions">
            <button
              className="btn btn-primary"
              onClick={() => handleActionClick("Card 1 Action Clicked!")}
            >
              Action
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => handleActionClick("Card 1 Cancel Clicked!")}
            >
              Cancel
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card">
          <img
            src="https://via.placeholder.com/300"
            alt="Card 2"
            className="card-image"
          />
          <div className="card-content">
            <h3 className="card-title">Card Title 2</h3>
            <p className="card-text">
              Another card example with a single action button.
            </p>
          </div>
          <div className="card-actions">
            <button
              className="btn btn-primary"
              onClick={() => handleActionClick("Card 2 Learn More Clicked!")}
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card">
          <div className="card-content">
            <h3 className="card-title">Text-Only Card</h3>
            <p className="card-text">
              This is a minimalist card without an image.
            </p>
          </div>
          <div className="card-actions">
            <button
              className="btn btn-primary"
              onClick={() => handleActionClick("Card 3 Okay Clicked!")}
            >
              Okay
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => handleActionClick("Card 3 Dismiss Clicked!")}
            >
              Dismiss
            </button>
          </div>
        </div>
      </div>

      {/* Floating Cards */}
      <div className="floating-cards-container">
        {floatingCardsData.map((card, index) => (
          <div key={index} className="floating-card">
            <img
              src={card.image}
              alt={card.title}
              className="floating-card-image"
            />
            <div className="floating-card-content">
              <h3 className="floating-card-title">{card.title}</h3>
              <p className="floating-card-text">{card.text}</p>
            </div>
            <button className="floating-card-action">{card.actionText}</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cards;
