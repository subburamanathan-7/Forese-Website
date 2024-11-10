import React from 'react';
import { Link } from 'react-router-dom';
import './MockPlacementStyles.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ABC from "../assets/abc.JPG";

const MockPlacement = () => {
  const cards = [
    {
      id: 1,
      title: 'Aptitude Test',
      image: ABC,
      link: '/aptitude',
    },
    {
      id: 2,
      title: 'Group Discussion',
      image: ABC,
      link: '/groupdiscussion',
    },
    {
      id: 3,
      title: 'Mock Placements',
      image: ABC,
      link: '/mock',
    },
  ];
  return (
    <div className="mock-placements">
      <Navbar />
      <div className="mp-heading-container">
        <h1 className="mp-main-heading">MOCK PLACEMENTS</h1>
      </div>
      <div className="mp-card-container">
        {cards.map(card => (
          <div key={card.id} className="mp-card">
            <img src={card.image} alt={card.title} />
            <h2>{card.title}</h2>
            <Link to={card.link}>
              <button>Read More</button>
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
  
};

export default MockPlacement;


