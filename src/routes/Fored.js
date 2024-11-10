import React from 'react'
import Navbar from "../components/Navbar"
import Footer from '../components/Footer'
import ForedImg from '../assets/fored.jpg'
import './ForedStyles.css'
import { useEffect } from 'react'

const Fored = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar/>
      
      {/* <div className="fored">
        <img src={Intro} alt="Description" className="image" />
        <div className="content">
          <p>FORESE conducted First Edition of the Foreign Universities Education Fair on 6th March 2023. This year, 13 universities were present among which University of Birmingham, TUM Asia, James Cook University were a few among the many universities which attended.

            We were able to provide functional as well as informative guidance to more than 480+ pre - final year aspiring students who indulged themselves in gaining knowledge.

            FORESE conducted First Edition of the Foreign Universities Education Fair on 6th March 2023. This year, 13 universities were present among which University of Birmingham, TUM Asia, James Cook University were a few among the many universities which attended.

            We were able to provide functional as well as informative guidance to more than 480+ pre - final year aspiring students who indulged themselves in gaining knowledge.</p>
        </div>
      </div> */}
      <div className="creative-container">
      <div className="content-box">
        <img
          src={ForedImg}
          alt="Creative"
          className="creative-image"
        />
        <div className="text-content">
          <h1>FORED</h1>
          <p>
          FORESE’s Foreign Universities Education Fair(FORED) provides a platform for students to connect directly with admission experts and educational consultants, offering personalized insights into diverse international study options. The event provides a unique opportunity for students to explore various academic specializations, scholarships, and financial aid options, helping them make informed decisions about studying abroad. 

Representatives from leading universities in the US, UK, Australia, and more participate in the fair, guiding students through the application process and offering advice on post-study work opportunities. These interactions empower students to understand the academic landscape, career prospects, and lifestyle in their country of interest.

Additionally, the fair offers critical guidance on essential standardized tests such as TOEFL, IELTS, and GRE, often prerequisites for international education. Experts provide detailed information about the exam structures, preparation strategies, and score requirements for various institutions, supporting students in their study abroad journey from start to finish. This holistic approach helps students navigate the complexities of pursuing higher education overseas, ensuring they are well-prepared for academic success and life abroad.

          </p>
        </div>
      </div>
    </div>
      <Footer />
    </div>
  )
}

export default Fored
