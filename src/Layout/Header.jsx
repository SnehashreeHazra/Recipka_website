import React, { useEffect, useState } from 'react'
import headerLogo from '../assets/r logo.png'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const [navbar,setNavbar]=useState(false)
  const scroll =()=>{
    if(window.scrollY > 50) {
      setNavbar(true)
    }else{
      setNavbar(false)
    }
  }
  window.addEventListener('scroll',scroll)
  return (
    <div className={navbar ? 'header_main_background' : 'header_main'}>
       <div className='header-wrapper'>
    <div className="header-section">
    <div style={{
      display:'flex',
      justifyContent:'flex-start',
      alignItems:'center',
      columnGap:'0px'
    }}>
    <div className="header-left">
        <img  src={headerLogo} alt="" />
      </div>
      <h2 className='recipka_logo_name'>RECIPKA</h2>
    </div>
    
      <div className="header-right">

        <p><NavLink className={'nav-link'} to="/"><i class="ri-home-4-line"></i><span>Home</span></NavLink></p>
        <p><NavLink  className={'nav-link'} to="/contact-us"><i class="ri-phone-line"></i><span>Contact Us</span></NavLink></p>
        <p><NavLink  className={'nav-link'} to="/contact-us"><i class="fa-regular fa-file"></i><span>Terms & Conditions</span></NavLink></p>
      </div>
    </div>
    </div>
    </div>
   
  )
}

export default Header
