import React from 'react';
import { Col } from "react-bootstrap";
import { FaLinkedin } from 'react-icons/fa';

export const TeamCard = ({ name, oneliner, position, imgUrl, ln }) => {
  return (
    <Col xs={12} sm={6} md={4}>
      <div className='team-imgbx'>
        <img src={imgUrl} alt={name} className='team-img' />
        <div className='team-info'>
          <h4>{name}</h4>
          <h5>{position}</h5>
        </div>
        <div className='team-txtx'>
          <h4>{name}</h4>
          <h5>{position}</h5>
          <span>{oneliner}</span>
          <div className='team-txtx-a'>
            <a href={ln} target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} style={{ color: "white", marginRight: "5rem" }} />
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
};



// import React from 'react'
// import { Col } from "react-bootstrap"
// import { FaLinkedin } from 'react-icons/fa'

// export const TeamCard = ({ name, oneliner,position, imgUrl, ln }) => {
//   return (
//     <Col sm={6} md={4}>
//         <div className='team-imgbx'>
//         <img src={imgUrl} alt={name} className='team-img'/>
//          <div className='team-info'>
//            <h4>{name}</h4>
//            <h5>{position}</h5>
//         </div>
//             <div className='team-txtx'>
//                 <h4>{name}</h4>
//                 <h5>{position}</h5>
//                 <span>{oneliner}</span>
                
//                 <div className='team-txtx-a'>
//                   <a href={ln} >
//                     <FaLinkedin size={30} style={{ color: "white", marginRight: "5rem" }} />
//                   </a>
//                 </div>
//             </div>
            
//         </div>

//     </Col>
//   )
// }


// import React from 'react'
// import { Col } from "react-bootstrap"
// import { FaLinkedin } from 'react-icons/fa'

// export const TeamCard = ({ name, oneliner,position, imgUrl, ln }) => {
//   return (
//     <Col sm={6} md={4}>
//         <div className='team-imgbx'>
//         <img src={imgUrl} alt={name} className='team-img'/>
//          <div className='team-info'>
//            <h4>{name}</h4>
//            <h5>{position}</h5>
//         </div>
//             <div className='team-txtx'>
//                 <h4>{name}</h4>
//                 <h5>{position}</h5>
//                 <span>{oneliner}</span>
                
//                 <div className='team-txtx-a'>
//                   <a href={ln} >
//                     <FaLinkedin size={30} style={{ color: "white", marginRight: "5rem" }} />
//                   </a>
//                 </div>
//             </div>
            
//         </div>

//     </Col>
//   )
// }


// import React from 'react'
// import { Col } from "react-bootstrap"
// import { FaLinkedin } from 'react-icons/fa'

// export const TeamCard = ({ name, oneliner, position, imgUrl, ln }) => {
//   return (
//     <Col sm={6} md={4}>
//       <div className='team-card'>
//         <img src={imgUrl} alt={name} className='team-img'/>
//         <div className='team-info'>
//           <h4>{name}</h4>
//           <h5>{position}</h5>
//           <div className='team-hover-info'>
//             <h4>{name}</h4>
//             <h5>{position}</h5>
//             <span>{oneliner}</span>
//             <a href={ln} className='linkedin-link'>
//               <FaLinkedin size={30} />
//             </a>
//           </div>
//         </div>
//       </div>
//     </Col>
//   )
// }







// import React from 'react'
// import { Col } from "react-bootstrap"
// import { FaLinkedin } from 'react-icons/fa'

// export const TeamCard = ({ name, oneliner,position, imgUrl, ln }) => {
//   return (
//     <Col sm={6} md={4}>
//         <div className='team-imgbx'>
//             <img src={imgUrl} />
//             <div className='team-txtx'>
//                 <h4>{name}</h4>
//                 <h5>{position}</h5>
//                 <span>{oneliner}</span>
//                 <div className='team-txtx-a'>
//                   <a href={ln} >
//                     <FaLinkedin size={30} style={{ color: "white", marginRight: "5rem" }} />
//                   </a>
//                 </div>
//             </div>
//         </div>

//     </Col>
//   )
// }

