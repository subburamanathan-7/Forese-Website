import React, { useState } from 'react';
import './InteractiveCardStyles.css';
 
const InteractiveCard = ({ frontContent, backContent }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="card-container">
      <div className={`card ${flipped ? 'flipped' : ''}`}>
        <div className="front">
          <h3>{frontContent.title}</h3>
          <button onClick={() => setFlipped(true)}></button>
        </div>
        <div className="back">
          <p>{backContent.description}</p>
          <button onClick={() => setFlipped(false)}></button>
        </div>
      </div>
    </div>
  );
};

export default InteractiveCard;


