import React from 'react';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import IntroImg1 from "../assets/IMG_1289.JPG";
import './GroupDiscussionStyles.css';
import { useEffect } from 'react';

const GroupDiscussion = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <div className='gdstyles'>
        <h3>GROUP DISCUSSION</h3>
        
        <p>
        Group discussions (GD) are a significant component of the selection process since they are designed to assess essential skills such as leadership, teamwork, and innovative thinking. While they may appear intimidating, GDs are more about clear communication and collaboration than dominance. By presenting ideas confidently, listening actively, and engaging respectfully with others, you can make a lasting impression and stand out as a well-rounded candidate.
        </p>

        <div className='card-container2'>
          {/* Card 1 */}
          <div className='card2'>
            <div className='card-inner'>
              <div className='card-front'>
                <h4>Participate in the Discussion :</h4>
              </div>
              <div className='card-back'>
                <p>Take the initiative to contribute and share your views. Volunteer and speak confidently, and you will have the opportunity to take the GD in a direction that suits you.</p>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className='card2'>
            <div className='card-inner'>
              <div className='card-front'>
                <h4>Communicate effectively : </h4>
              </div>
              <div className='card-back'>
                <p>Clear communication is essential during group discussions. Present your thoughts boldly, and make sure your arguments are compelling. Improve your vocal clarity by practicing speech exercises. After your initial contribution, stay active and rejoin the discussion  to add meaningful input.</p>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className='card2'>
            <div className='card-inner'>
              <div className='card-front'>
                <h4>Listen actively :</h4>
              </div>
              <div className='card-back'>
                <p>Listen carefully to what others are saying during the discussion. Responding thoughtfully conveys respect for their points of view, as well as a genuine interest in the debate and a commitment to understanding other perspectives.</p>
              </div>
            </div>
          </div>
          {/* Card 4 */}
          <div className='card2'>
            <div className='card-inner'>
              <div className='card-front'>
                <h4>Encourage teamwork :</h4>
              </div>
              <div className='card-back'>
                <p>Create a collaborative environment by aggressively encouraging quieter participants to offer their ideas. Support their efforts to build an inclusive environment that recognises everyone's contributions and promotes open discussion among all members.</p>
              </div>
            </div>
          </div>
          {/* Card 5 */}
          <div className='card2'>
            <div className='card-inner'>
              <div className='card-front'>
                <h4>Think creatively :</h4>
              </div>
              <div className='card-back'>
                <p>Present new and creative thoughts that demonstrate your capacity to think outside the box. Creative solutions can help you stand out from others and demonstrate your problem-solving ability.</p>
              </div>
            </div>
          </div>
          {/* Card 6 */}
          <div className='card2'>
            <div className='card-inner'>
              <div className='card-front'>
                <h4>Maintain positive body language :</h4>
              </div>
              <div className='card-back'>
                <p>Ensure  your body language is relaxed and confident throughout the conversation. Maintaining eye contact, good posture, and positive gestures are critical for communicating professionalism and establishing connection with people.</p>
              </div>
            </div>
          </div>
          {/* Card 7 */}
          <div className='card2'>
            <div className='card-inner'>
              <div className='card-front'>
                <h4>Stay Composed :</h4>
              </div>
              <div className='card-back'>
                <p>Maintain composure in the face of disagreements or interruptions during the talk. Patience and emotional control are essential for having a fair and balanced conversation that promotes meaningful dialogue.</p>
              </div>
            </div>
          </div>
          {/* Card 8 */}
          <div className='card2'>
            <div className='card-inner'>
              <div className='card-front'>
                <h4>Stay assertive, not aggressive :</h4>
              </div>
              <div className='card-back'>
                <p>In group discussions, communicate your thoughts confidently while avoiding aggression. Present your opinions calmly and respectfully, as aggressiveness might result in negative perceptions. Furthermore, don't be afraid to contribute numerous times; re-enter the discussion with powerful comments to support your point of view and indicate your involvement.</p>
              </div>
            </div>
          </div>
        </div>

        <div className='image-container2'>
          <img src={IntroImg1} alt="IntroImg1" />
          <img src={IntroImg1} alt="IntroImg1" />
          <img src={IntroImg1} alt="IntroImg1" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GroupDiscussion;



// import React from 'react';
// import Navbar from "../components/Navbar";
// import Footer from '../components/Footer';
// import IntroImg1 from "../assets/IMG_1289.JPG";
// import './GroupDiscussionStyles.css';

// const GroupDiscussion = () => {
//   return (
//     <div>
//       <Navbar />
//       <div className='gdstyles'>
//         <h3>GROUP DISCUSSION</h3>
        
//         <p>
//         The Aptitude Assessment is designed to evaluate cognitive abilities, analytical thinking, and problem-solving skills—essential components for success in today’s competitive job market. This year’s assessment features a variety of targeted evaluations tailored to different academic departments, ensuring that the content is relevant to the diverse career paths of participants.
//         </p>
//         <p>
//         The Aptitude Assessment is designed to evaluate cognitive abilities, analytical thinking, and problem-solving skills—essential components for success in today’s competitive job market. This year’s assessment features a variety of targeted evaluations tailored to different academic departments, ensuring that the content is relevant to the diverse career paths of participants.
//         </p>
        
//         <h2>Benefits of the Aptitude Test: </h2>

//         <div className='card-container2'>
//           <div className='card2'>
//             <h4>Enhancing Placement Readiness:</h4>
//             <p>Preparing candidates to meet the demands of real-world job scenarios and interviews.</p>
//           </div>
//           <div className='card2'>
//             <h4>Identifying Strengths and Weaknesses:</h4>
//             <p>Offering insights that help candidates understand their areas of proficiency and those that may require further development.</p>
//           </div>
//           <div className='card2'>
//             <h4>Aligning Skills with Interests:</h4>
//             <p> Assisting candidates in discovering how their abilities connect with their career aspirations.</p>
//           </div>
//           <div className='card2'>
//             <h4>Boosting Time Management Skills:</h4>
//             <p>Encouraging efficient use of time under pressure, a vital skill in both academic and professional settings.</p>
//           </div>
//           <div className='card2'>
//             <h4>Fostering Critical Thinking:</h4>
//             <p>Cultivating the ability to analyze information and approach challenges with a strategic mindset.</p>
//           </div>
//           <div className='card2'>
//             <h4>Fostering Critical Thinking:</h4>
//             <p>Cultivating the ability to analyze information and approach challenges with a strategic mindset.</p>
//           </div>
//           <div className='card2'>
//             <h4>Fostering Critical Thinking:</h4>
//             <p>Cultivating the ability to analyze information and approach challenges with a strategic mindset.</p>
//           </div>
//           <div className='card2'>
//             <h4>Fostering Critical Thinking:</h4>
//             <p>Cultivating the ability to analyze information and approach challenges with a strategic mindset.</p>
//           </div>
//         </div>

//         <div className='image-container2'>
//           <img src={IntroImg1} alt="IntroImg1" />
//           <img src={IntroImg1} alt="IntroImg1" />
//           <img src={IntroImg1} alt="IntroImg1" />
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default GroupDiscussion;
