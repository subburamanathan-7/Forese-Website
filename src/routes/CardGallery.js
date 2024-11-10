import React from 'react';
import InteractiveCard from './InteractiveCard'; 
import './CardGalleryStyles.css';
 
const CardGallery = () => {
  const cardData = [
    { frontContent: { title: 'Networking among peers:'}, backContent: { description: 'Connect with like-minded engineers to exchange insights, collaborate and broaden your professional network.' } },
    { frontContent: { title: 'Connect with the community:'}, backContent: { description: 'Join a space where experts, executives and learners meet to discuss and explore the exclusiveness they provide.' } },
    { frontContent: { title: 'Soft skill development:'}, backContent: { description: 'Enhance communication skills, cultivate strong character traits, and unlock your full potential.' } },
    { frontContent: { title: 'Empirical Exposure:'}, backContent: { description: 'Gain one-on-one, real-time professional experience with company executives.' } },
    { frontContent: { title: 'Professional Etiquette:'}, backContent: { description: 'Empowering and equipping students with unspoken professional standards and code of conduct.' } },
    { frontContent: { title: 'Interpersonal skills:'}, backContent: { description: 'Comprehensive communication techniques and strategies for placements.' } }
  ];

  return (
    <div className="card-gallery-container">
      <div className="gallery-header">
        
        {/* <h4>ABOUT US</h4>

          <p style={{textAlign: 'left'}}>FORESE (FORum for Economic Studies by Engineers) is a student-run forum that aims at assisting engineers in seizing placement opportunities through a wide array of preparatory events.</p>
          
          <p>As a member, engineers get insights into the inner workings of the industry by spectating processes such as placement interviews, corporate interactions, and aptitude tests.</p> 
            
          <p>The forum also integrates members into organizational structures and team activities, allowing them to understand the clockwork underlying corporate work environments.</p> 
            
          <p>Through this, the FORESE trains its members to become industry professionals, imparting team spirit and interpersonal skills to help them become active, productive members of an organization.</p> 
            
          <p>FORESE offers students a unique training experience, facilitating a perfect simulation of the placement process and hosting interactions and interviews with industry figures. Through this, FORESE helps students plan interview strategies, alleviate placement-related anxiety, and understand the procedure and etiquette, resulting in outstanding performances during the placement season.</p> 
            
          <p> Both students and members get the precious opportunity to set up connections to the people in the industry, building networks to advance their careers. Thereby, FORESE equips engineers with all the skills they need to excel in the workplace</p>  */}

          <h4 >What We Do</h4> 
      </div>
      <div className="card-gallery">
        {cardData.map((data, index) => (
          <InteractiveCard
            key={index}
            frontContent={data.frontContent}
            backContent={data.backContent}
          />
        ))}
      </div>
    </div>
  );
};

export default CardGallery;

