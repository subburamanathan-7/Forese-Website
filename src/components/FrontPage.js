import "./FrontPageStyles.css"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import IntroImg1 from "../assets/IMG_1289.JPG"
import React from 'react'
// import { useSpring, animated } from '@react-spring/web';
import { useState, useEffect } from 'react';
import LoadingComponent from './LoadingComponent.js';

const FrontPage = () => {
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingComponent />;
  }

  return ( 
  <div className="front">
      <div className="mask">
        {/* <img className="intro-img" src={IntroImg1} alt="IntroImg" /> */}
        <LazyLoadImage
          className="intro-img"
          src={IntroImg1}
          alt="IntroImg"
          effect="blur"
        />
      </div>
      <div className="content">
        {/* <h1>FORum for Economic Studies by Engineers</h1> */}
        <div className="typing-effect-wrapper">
          <span className="typing-effect-line"><h1>FORum for Economic</h1></span>
          <span className="typing-effect-line"><h1>Studies by Engineers</h1></span>
        </div>
      </div>
        
      

        {/* <Link to="/Events"><button className="btn">Mock Placements</button></Link>
        <Link to="/Team" className="btn btn-ligth">Faces of FORESE</Link> */}
      
  </div>
    
)}

export default FrontPage
