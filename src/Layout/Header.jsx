import React from 'react'
import headerLogo from '../assets/r logo.png'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header_main'>
       <div className='header-wrapper'>
    <div className="header-section">
    <div className="header-left">
        <img src={headerLogo} alt="" />
      </div>
      <div className="header-right">

        <p><NavLink className={'nav-link'} to="/"><i class="ri-home-4-line"></i><span>Home</span></NavLink></p>
        <p><NavLink  className={'nav-link'} to="/contact-us"><i class="ri-phone-line"></i><span>Contact Us</span></NavLink></p>
      </div>
    </div>
    </div>
    </div>
   
  )
}

export default Header
