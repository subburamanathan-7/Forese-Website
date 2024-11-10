import React from 'react';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import IntroImg1 from "../assets/IMG_1289.JPG";
import './AptitudeStyles.css';
import { useEffect } from 'react';

const Aptitude = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <div className='aptitudestyles'>
        <h3>APTITUDE ROUND</h3>
        
        <p>
        The Aptitude Assessment is designed to evaluate cognitive abilities, analytical thinking, and problem-solving skills—essential components for success in today’s competitive job market. This year’s assessment features a variety of targeted evaluations tailored to different academic departments, ensuring that the content is relevant to the diverse career paths of participants.
        </p>
        <p>
        The Aptitude Assessment is designed to evaluate cognitive abilities, analytical thinking, and problem-solving skills—essential components for success in today’s competitive job market. This year’s assessment features a variety of targeted evaluations tailored to different academic departments, ensuring that the content is relevant to the diverse career paths of participants.
        </p>
        
        <h2>Benefits of the Aptitude Test: </h2>

        <div className='card-container1'>
          <div className='card1'>
            <h4>Enhancing Placement Readiness:</h4>
            <p>Preparing candidates to meet the demands of real-world job scenarios and interviews.</p>
          </div>
          <div className='card1'>
            <h4>Identifying Strengths and Weaknesses:</h4>
            <p>Offering insights that help candidates understand their areas of proficiency and those that may require further development.</p>
          </div>
          <div className='card1'>
            <h4>Aligning Skills with Interests:</h4>
            <p> Assisting candidates in discovering how their abilities connect with their career aspirations.</p>
          </div>
          <div className='card1'>
            <h4>Boosting Time Management Skills:</h4>
            <p>Encouraging efficient use of time under pressure, a vital skill in both academic and professional settings.</p>
          </div>
          <div className='card1'>
            <h4>Fostering Critical Thinking:</h4>
            <p>Cultivating the ability to analyze information and approach challenges with a strategic mindset.</p>
          </div>
        </div>

        <div className='image-container1'>
          <img src={IntroImg1} alt="IntroImg1" />
          <img src={IntroImg1} alt="IntroImg1" />
          <img src={IntroImg1} alt="IntroImg1" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Aptitude;
