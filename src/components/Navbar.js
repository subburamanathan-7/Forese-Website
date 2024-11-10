import "./NavbarStyles.css";
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [ click, setClick ] = useState(false);
  const handleClick = () => setClick(!click);

  const [ color, setColor ] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    }else{
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className= { color ? "header header-bg": "header" }>
      <Link to="/">
        <img src="foresebluelogo.png" alt="LOGO" />
      </Link>
      <ul className= { click ? "nav-menu active" : "nav-menu"}>
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
        <li>
          <Link to="/codersforum">Coder's Forum</Link>
        </li>
        {/* <li>
          <Link to="/mockplacements">Mock Placements</Link>
        </li> */}
        <li>
          <Link to="/mockplacement">Mock Placements</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/submitresume"><button className="btn">Submit Resume</button></Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
        <FaTimes size={20} style={{ color: "black" }} /> 
        ) : ( 
        <FaBars size={20} style={{ fill: "white" }} /> 
        )}
      </div>
    </div>
  )
}

export default Navbar
