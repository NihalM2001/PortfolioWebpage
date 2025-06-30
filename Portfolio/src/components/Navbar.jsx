import React, { useState } from 'react'
import '../styles/navbar.css'
import { Link } from 'react-router-dom'
import myLogo from '../assets/my-logo4.png'

const Navbar = () => {
  
  const [openMenu , setOpenMenu] = useState('false');
  const [navUnderline, setNavUnderline] = useState('false');

  return (
    <>
        <nav className="navbar-container arvo-regular">
            <div className='logo'>
              <img src={myLogo} alt="myLogo" srcset=""/>
            </div>
            <div className="nav-links">
              <a href="/" className={`${navUnderline? "active": ""}`} onClick={()=>setNavUnderline((active)=>!active)}>Home</a>
              <a href="">Skills</a>
              <a href="">Projects</a>
              <a href="">Experience</a>
              <a href="">Education and Certifications</a>
            </div>
            <div className="menuButton" id='menu' onClick={()=>{setOpenMenu((prev)=> !prev)}}>☰</div>
        </nav>
        <div className={`dropdownMenu ${openMenu? "flex":"none"} arvo-regular`} id='dropdown-menu'>
          <a href="">Home</a>
          <a href="">Skills</a>
          <a href="">Projects</a>
          <a href="">Experience</a>
          <a href="">Education and Certifications</a>
        </div>
    </>
  )
}

export default Navbar