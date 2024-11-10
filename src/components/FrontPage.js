import "./FrontPageStyles.css"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import IntroImg from "../assets/intro-bg.JPG"  
import IntroImg1 from "../assets/IMG_1289.JPG"
import IntroImg2 from "../assets/IMG_1291.JPG"
import { Link } from "react-router-dom"
import React from 'react'
import InteractiveCard from "../routes/InteractiveCard"
import CardGallery from "../routes/CardGallery"
// import { useSpring, animated } from '@react-spring/web';
import { useState, useEffect } from 'react';
import LoadingComponent from './LoadingComponent';



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
