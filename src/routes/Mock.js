import React from 'react';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import IntroImg1 from "../assets/IMG_1289.JPG";
import './MockStyles.css';
import { ImOffice } from 'react-icons/im';
import { useEffect } from 'react';

const Mock = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <div className='mockstyles'>
        <h3>MOCK PLACEMENTS</h3>
        
        <p>
          FORESE's Mock Placements event stands as our flagship annual program, dedicated exclusively to pre-final year students across all academic disciplines. This remarkable preparatory event fosters a competitive atmosphere, offering students valuable insights into the dynamics of actual placement processes.
          Annually, approximately 900 pre-final year students undergo technical assessments by around 120 HR professionals and industry experts. Through individual interviews and group discussion sessions, students receive personalized feedback aimed at honing their skill sets in readiness for upcoming placement opportunities.
          With each passing year, Mock Placements continues to empower students with essential skills and invaluable exposure. In 2024, the event attracted participation from over 100 prominent companies, both online and offline. FORESE, in collaboration with our esteemed institution, Sri Venkateswara College of Engineering, takes immense pride in the success of our flagship event and remains steadfast in our commitment to delivering enhanced outcomes year after year.
        </p>
        
        <div className='image-container'>
          {[...Array(6)].map((_, index) => (
            <img key={index} src={IntroImg1} alt={`IntroImg${index + 1}`} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Mock;
