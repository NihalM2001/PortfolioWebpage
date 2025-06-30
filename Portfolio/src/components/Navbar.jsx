import React, { useState } from 'react'
import '../styles/navbar.css'
import { Link, useLocation } from 'react-router-dom'
import myLogo from '../assets/my-logo4.png'

const Navbar = () => {
  
  const [openMenu , setOpenMenu] = useState('false');
  const location = useLocation();
  const navigate = location.pathname;
  console.log("Current location is: "+ navigate)

  return (
    <>
        <nav className="navbar-container arvo-regular">
            <div className='logo'>
              <img src={myLogo} alt="myLogo"/>
            </div>
            <div className="nav-links">
              <Link to="/" className={navigate === "/"?"active":"inactive"}>Home</Link>
              <Link to="/skills" className={navigate === "/skills"?"active": "inactive"}>Skills</Link>
              <Link to="">Projects</Link>
              <Link to="">Experience</Link>
              <Link to="">Education and Certifications</Link>
            </div>
            <div className="menuButton" id='menu' onClick={()=>{setOpenMenu((prev)=> !prev)}}>☰</div>
        </nav>
        <div className={`dropdownMenu ${openMenu? "flex":"none"} arvo-regular`} id='dropdown-menu'>
          <Link to="/">Home</Link>
          <Link to="/skills">Skills</Link>
          <Link to="">Projects</Link>
          <Link to="">Experience</Link>
          <Link to="">Education and Certifications</Link>
        </div>
    </>
  )
}

export default Navbar