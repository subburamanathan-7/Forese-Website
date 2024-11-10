import React from 'react'
import Navbar from "../components/Navbar"
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom';
import './SubmitresumeStyles.css'
import { useEffect } from 'react';


const Submitresume = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const handleClick = () => {
    window.location.href = 'https://docs.google.com/document/d/1RNhfcDbDVG0GBzzGtS1OG3DamEf4er43RLHkIBN5cA8/edit?usp=sharing';
  };

  return (
    <div>
      <Navbar/>
      <div className='submitresumeclass'>
        
        <h2>SUBMIT RESUME</h2>
        <p>
        FORESE conducts an annual Mock Placements for providing the pre-final year students a competitive environment and gives them insights into how actual placements will be conducted. All the students of Sri Venkateswara College of Engineering, Sriperumbudur are requested to submit their resumes by clicking below.
        </p>

        <button className='btn' onClick={handleClick}>Submit Resume</button>

        <h4>Why Submit Your Resume?</h4>
        <p>Submitting your resume helps us review your qualifications and experience for potential opportunities.</p>

      </div>
      <Footer />
    </div>
  )
}

export default Submitresume

