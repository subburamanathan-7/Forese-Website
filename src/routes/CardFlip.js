import React, { useState } from 'react';
import './CardFlipStyles.css';

// const frontColor = '#4f6cb0';  
// const backColor = '#1a3a5f';    

const frontColor ='#7e92c2' ;  
const backColor = '#a6c2e1';    

const cards = [
  { frontContent: 'Networking among peers:', backContent: 'Connect with like-minded engineers to exchange insights, collaborate and broaden your professional network.' },
    { frontContent: 'Connect with the community:', backContent: 'Join a space where experts, executives and learners meet to discuss and explore the exclusiveness they provide.'} ,
    { frontContent: 'Soft skill development:', backContent: 'Enhance communication skills, cultivate strong character traits, and unlock your full potential.' },
    { frontContent: 'Empirical Exposure:', backContent: 'Gain one-on-one, real-time professional experience with company executives.' },
    { frontContent: 'Professional Etiquette:', backContent: 'Empowering and equipping students with unspoken professional standards and code of conduct.' },
    { frontContent: 'Interpersonal skills:', backContent: 'Comprehensive communication techniques and strategies for placements.'} 
];

const Card = ({ frontContent, backContent }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="card" onClick={() => setIsFlipped(!isFlipped)}>
      <div className={`card-inner ${isFlipped ? 'flipped' : ''}`}>
        <div className="card-front" style={{ backgroundColor: frontColor }}>
          {frontContent}
        </div>
        <div className="card-back" style={{ backgroundColor: backColor }}>
          {backContent}
        </div>
      </div>
    </div>
  );
};

const CardFlip = () => {
  return (
    <div className='card-wrapper'>
    <h3>WHAT WE DO</h3>
    <div className="card-container">
      
      {cards.map((card, index) => (
        <Card
          key={index}
          frontContent={card.frontContent}
          backContent={card.backContent}
        />
      ))}
    </div>
    </div>
  );
};

export default CardFlip;

