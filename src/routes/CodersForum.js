import React from 'react';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import CFlogo from '../assets/codersforumlogo.jpg';
import './CodersForumStyles.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const CodersForum = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/fored');
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <div className='cf'>
        <img src={CFlogo} alt="CFlogo" />
        <h3>About Coder's Forum</h3>
        <p>
        The Coders’ Forum is a wing of FORESE which believes in the motto of students helping students. Our mission is to break down the barriers students face while learning to code, fostering a supportive and dynamic environment for growth. The forum is driven by experienced mentors who are passionate about helping their peers enhance their coding skills and prepare for the technical challenges they will encounter in placements. Through a series of hands-on interactive teaching sessions, hackathons and skill-building workshops, we empower students to confidently navigate technical interviews and excel in their coding careers.
        </p>

        <button className='btn' onClick={handleClick}>Hackathon</button>

      </div>
      <Footer />
    </div>
  );
};

export default CodersForum;

