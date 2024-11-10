import { FaGithub, FaLinkedin } from "react-icons/fa"
import "./FooterStyles.css"
import { Link } from "react-router-dom"

import React from 'react'

const Footer = () => {
  return (
    <div className="footer" >
      <div className="footer-container">
         <div className="left">
          <h4>ABOUT</h4>         
          <p>FORESE is a student-run forum and an extension of the Placement Cell of Sri Venkateswara College of Engineering. </p>
          <div className="social">
            <a href="https://www.linkedin.com/company/forese/mycompany/">
              <FaLinkedin size={30} style={{ color: "white", marginRight: "1rem" }} />
            </a>
            <a href="https://github.com/ForeseTech">
              <FaGithub size={30} style={{ color: "white", marginRight: "1rem" }} />
            </a>
          </div>
         
         </div>

         <div className="middle">
          <h4>QUICK LINKS</h4>
          
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/team">Team</Link>
            </li>
            <li>
              <Link to="/events">Events</Link>
            </li>
          
         </div>

         <div className="right">
          
          
          <li>
            <Link to="/codersforum">Coder's Forum</Link>
          </li>
          <li>
            <Link to="/fored">FORED</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/submitresume">Submit Resume</Link>
          </li>

         </div>

      </div>
    </div>
  )
}

export default Footer
