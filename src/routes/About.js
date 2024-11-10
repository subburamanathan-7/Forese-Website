import React from 'react'
import Navbar from "../components/Navbar"
import Footer from '../components/Footer'
import "./AboutStyles.css"
import { useEffect } from 'react';

const About = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar/>
      <div className='about'> 
        
          <h3>ABOUT US</h3>

          <p>FORESE (FORum for Economic Studies by Engineers) is a student-led forum that helps engineering students prepare for placements through real-world experiences and practical learning.
          </p>
          <p>Members gain direct exposure to how the industry works by participating in mock interviews, corporate interactions, and aptitude tests, giving them a clear understanding of what to expect in the professional world. 
          They also work on team projects, developing the collaboration and communication skills that are key to thriving in any workplace.</p>
          <p>What makes FORESE unique is its hands-on approach to simulating the placement process. Students get the chance to meet and interact with industry professionals, sharpen their interview techniques, and learn how to manage the stress that comes with placements. </p>
          <p>Plus, FORESE helps students build valuable connections with industry experts, creating networks that can support their future careers.
          </p>
          <p>FORESE is all about preparing engineering students not just for placements but for long-term success by giving them the skills, confidence, and connections they need to excel in their chosen fields.
          </p>
          
      </div>
      <Footer />
    </div>
  )
}

export default About

