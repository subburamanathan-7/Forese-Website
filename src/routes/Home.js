import React from 'react'
import Navbar from "../components/Navbar"
import FrontPage from "../components/FrontPage"
import Footer from '../components/Footer'
// import CardGallery from './CardGallery'
import CardFlip from './CardFlip'
import wwdcard from './wwdcard'
import WWD from "../routes/wwdcard"

const Home = () => {
  return (
    <div >
      <Navbar/>
      <FrontPage />
      
      <WWD/>
      {/* <CardFlip /> */}
      {/* <wwdcard /> */}
      {/* <CardGallery/> */}
      {/* <CardFlip/> */}
      {/* <div className='card-container2'>
          
          <div className='card2'>
            <div className='card-inner'>
              <div className='card-front'>
                <h4>Enhancing Placement Readiness:</h4>
              </div>
              <div className='card-back'>
                <p>Preparing candidates to meet the demands of real-world job scenarios and interviews.</p>
              </div>
            </div>
          </div>
          
          <div className='card2'>
            <div className='card-inner'>
              <div className='card-front'>
                <h4>Identifying Strengths and Weaknesses:</h4>
              </div>
              <div className='card-back'>
                <p>Offering insights that help candidates understand their areas of proficiency and those that may require further development.</p>
              </div>
            </div>
          </div>
          
          <div className='card2'>
            <div className='card-inner'>
              <div className='card-front'>
                <h4>Aligning Skills with Interests:</h4>
              </div>
              <div className='card-back'>
                <p>Assisting candidates in discovering how their abilities connect with their career aspirations.</p>
              </div>
            </div>
          </div>
          
          <div className='card2'>
            <div className='card-inner'>
              <div className='card-front'>
                <h4>Boosting Time Management Skills:</h4>
              </div>
              <div className='card-back'>
                <p>Encouraging efficient use of time under pressure, a vital skill in both academic and professional settings.</p>
              </div>
            </div>
          </div>
          
          <div className='card2'>
            <div className='card-inner'>
              <div className='card-front'>
                <h4>Fostering Critical Thinking:</h4>
              </div>
              <div className='card-back'>
                <p>Cultivating the ability to analyze information and approach challenges with a strategic mindset.</p>
              </div>
            </div>
          </div>
          
          <div className='card2'>
            <div className='card-inner'>
              <div className='card-front'>
                <h4>Improving Communication Skills:</h4>
              </div>
              <div className='card-back'>
                <p>Enhancing verbal and non-verbal communication techniques essential for effective interaction.</p>
              </div>
            </div>
          </div>
          
        </div> */}
      <Footer />
    </div>
  )
}

export default Home
