import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './ContactStyles.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';
import { useEffect } from 'react';

const Contact = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div>
            <Navbar />
            <div className='contact-wrapper'>
                <h1 className='contact-heading'>CONTACT US</h1>
                <div className='contact-box'>
                    <div className='contact'>
                        <div className='contactleft'>
                            <div className='contact-item'>
                                <FaEnvelope className='contact-icon' />
                                <div className='contact-info email-info'>
                                    <h2>Email:</h2>
                                    <p>forese.co.in</p>
                                </div>
                            </div>
                            <div className='contact-item'>
                                <FaMapMarkerAlt className='contact-icon' />
                                <div className='contact-info'>
                                    <h2>Location:</h2>
                                    <p>Placement Cell, Sri Venkateswara College of Engineering</p>
                                </div>
                            </div>
                            <div className='contact-item'>
                                <FaPhone className='contact-icon' />
                                <div className='contact-info phone-info'>
                                    <h2>Phone:</h2>
                                    <p>9876543210</p>
                                </div>
                            </div>
                            <div className='contact-item'>
                                <FaLinkedin className='contact-icon' />
                                <div className='contact-info'>
                                    <h2>LinkedIn:</h2>
                                    <a
                                        href="https://www.linkedin.com/company/forese/mycompany/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        https://www.linkedin.com/company/forese/mycompany/
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;



// import React from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import './ContactStyles.css';
// import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';

// const Contact = () => {
//     return (
//         <div>
//             <Navbar />
//             <div className='contact-wrapper'>
//                 <h1 className='contact-heading'>CONTACT US</h1>
//                 <div className='contact-box'>
//                     <div className='contact'>
//                         <div className='contactleft'>
//                             <div className='contact-item'>
//                                 <FaEnvelope className='contact-icon' />
//                                 <div className='contact-info'>
//                                     <h2>Email:</h2>
//                                     <p>forese.co.in</p>
//                                 </div>
//                             </div>

                            

//                             <div className='contact-item'>
//                                 <FaMapMarkerAlt className='contact-icon' />
//                                 <div className='contact-info'>
//                                     <h2>Location:</h2>
//                                     <p>Placement Cell, Sri Venkateswara College</p>
//                                 </div>
//                             </div>
//                             <div className='contact-item'>
//                                 <FaPhone className='contact-icon' />
//                                 <div className='contact-info'>
//                                     <h2>Phone:</h2>
//                                     <p>9876543210</p>
//                                 </div>
//                             </div>
//                             <div className='contact-item'>
//                                 <FaLinkedin className='contact-icon' />
//                                 <div className='contact-info'>
//                                     <h2>LinkedIn:</h2>
//                                     <a
//                                         href="https://www.linkedin.com/company/forese/mycompany/"
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                     >
//                                         https://www.linkedin.com/company/forese/mycompany/
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     );
// }

// export default Contact;



// import React from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import './ContactStyles.css';
// import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';

// const Contact = () => {
//     return (
//         <div>
//             <Navbar />
//             <div className='contact-wrapper'>
//                 <h1 className='contact-heading'>CONTACT US</h1>
//                 <div className='contact-box'>
//                     <div className='contact'>
//                         <div className='contactleft'>
//                             <div className='contact-item'>
//                                 <FaEnvelope className='contact-icon' />
//                                 <div className='contact-info'>
//                                     <h2>Email:</h2>
//                                     <p>forese.co.in</p>
//                                 </div>
//                             </div>
//                             <div className='contact-item'>
//                                 <FaMapMarkerAlt className='contact-icon' />
//                                 <div className='contact-info'>
//                                     <h2>Location:</h2>
//                                     <p>Placement Cell, Sri Venkateswara College</p>
//                                 </div>
//                             </div>
//                             <div className='contact-item'>
//                                 <FaPhone className='contact-icon' />
//                                 <div className='contact-info'>
//                                     <h2>Phone:</h2>
//                                     <p>9876543210</p>
//                                 </div>
//                             </div>
//                             <div className='contact-item'>
//                                 <FaLinkedin className='contact-icon' />
//                                 <div className='contact-info'>
//                                     <h2>LinkedIn:</h2>
//                                     <a
//                                         href="https://www.linkedin.com/company/forese/mycompany/"
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                     >
//                                         https://www.linkedin.com/company/forese/mycompany/
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     );
// }

// export default Contact;




// import React from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import './ContactStyles.css';
// import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa'; // Importing icons

// const Contact = () => {
//   return (
//     <div>
//       <Navbar />
//       <div className='contact-wrapper'>
//         <h1 className='contact-heading'>CONTACT US</h1>
//         <div className='contact-box'>
//           <div className='contact'>
//             <div className='contactleft'>
//               <div className='contact-item'>
//                 <FaEnvelope className='contact-icon' />
//                 <h2>Email: </h2>
//                 <p>forese.co.in</p>
//               </div>
//               <div className='contact-item'>
//                 <FaMapMarkerAlt className='contact-icon' />
//                 <h2>Location: </h2>
//                 <p>Placement Cell, Sri Venkateswara College</p>
//               </div>
//               <div className='contact-item'>
//                 <FaPhone className='contact-icon' />
//                 <h2>Phone: </h2>
//                 <p>9876543210</p>
//               </div>
//               <div className='contact-item'>
//                 <FaLinkedin className='contact-icon' />
//                 <h2>LinkedIn: </h2>
//                 <a href="https://www.linkedin.com/company/forese/mycompany/" target="_blank" rel="noopener noreferrer">
//                   https://www.linkedin.com/company/forese/mycompany/
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default Contact;



// import React from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import './ContactStyles.css';
// import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa'; // Importing icons

// const Contact = () => {
//   return (
//     <div>
//       <Navbar />
//       <div className='contact-wrapper'>
//         <h1 className='contact-heading'>CONTACT US</h1>
//         <div className='contact'>
//           <div className='contactleft'>
//             <div className='contact-item'>
//               <FaEnvelope className='contact-icon' />
//               <h2>Email: </h2>
//               <p> forese.co.in</p>
//             </div>
//             <div className='contact-item'>
//               <FaMapMarkerAlt className='contact-icon' />
//               <h2>Location: </h2>
//               <p> Placement Cell, Sri Venkateswara College</p>
//             </div>
//             <div className='contact-item'>
              
//               <FaPhone className='contact-icon' />
//               <h2>Phone: </h2>
//               <p> 9876543210</p>
//             </div>
//             <div className='contact-item'>
//               <FaLinkedin className='contact-icon' />
//               <h2>LinkedIn: </h2>
//               <a href="https://www.linkedin.com/company/forese/mycompany/" target="_blank" rel="noopener noreferrer">
//                  https://www.linkedin.com/company/forese/mycompany/
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default Contact;


// import React from 'react'
// import Navbar from "../components/Navbar"
// import Footer from '../components/Footer'
// import './ContactStyles.css'

// const Contact = () => {
//   return (
//     <div>
//       <Navbar />
//     <div className='contact-wrapper'>
//       <h1 className='contact-heading'>CONTACT US</h1>
//       <div className='contact'>
//         <div className='contactleft'>
//             <h2>Mail ID: </h2>
//             <h2>Phone Number: </h2>
//             <h2>Location: </h2>
//             <h2>Linkedln Profile: </h2>
//         </div>
//         <div className='contactright'>
//             <p>forese.co.in</p>
//             <p>9876543210</p>
//             <p>Placement Cell, Sri Venkateswara College</p>
//             <a href="https://www.linkedin.com/company/forese/mycompany/">https://www.linkedin.com/company/forese/mycompany/</a>
//         </div>
//       </div>
//     </div>
//     <Footer />
//     </div>
//   )
// }

// export default Contact

{/* <div >
      <Navbar/>
      <Form /> 
      
      <Footer/>
    </div> */}