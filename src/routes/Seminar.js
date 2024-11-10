import React from 'react';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import SemImg from "../assets/seminar.jpg";
import './SeminarStyles.css';
import { useEffect } from 'react';

const Seminar = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <div className='seminarstyles'>
        <h3>SEMINAR</h3>
          <p>
            FORESE conducts numerous seminars throughout the year by having guest speakers from the industry to provide the students with much-needed guidance on various topics like preparation for entrance exams, resume-building techniques, soft skill development, guidance for higher studies, and placement interviews. This year, FORESE has already conducted 2 seminars successfully and is looking forward to conducting many more in the coming months.
          </p> 
          
          <p>
          FORESE successfully hosted “Success Beyond Tech,” an insightful session on “The Role of Soft Skills in Tech Careers” led by Mr. Pankaj Kumar Sinha. The event highlighted the crucial role that soft skills play in career development within the tech industry.  
          </p>
          <p>
          Participants gained valuable knowledge on how skills like communication, leadership, and teamwork can significantly enhance their career prospects. The seminar also explored how soft skills, when combined with technical expertise, provide professionals with a competitive edge.
          </p>
          <p>
          Attendees left the session with practical strategies and a deeper understanding of the importance of soft skills in navigating the evolving tech landscape.
          </p>
          <div className='sem'>
           <h5>Success Beyond Tech:</h5><p> The Role of Soft Skills in Tech Careers </p> 
          <h5>Date:</h5><p> 25th September 2024  </p>
          <h5>Hosted by:</h5><p> FORESE   </p>
          <h5>Presented by:</h5><p> Mr. Pankaj Kumar Sinha  </p>
          </div>

        <div className='image-container-seminar'>
          <img src={SemImg} alt="SemImg" />
          <img src={SemImg} alt="SemImg" />
          <img src={SemImg} alt="SemImg" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Seminar;
