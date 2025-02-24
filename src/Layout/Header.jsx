import React from 'react'
import headerLogo from '../assets/r logo.png'

const Header = () => {
  return (
    <div className='header-wrapper'>
    <div className="header-section">
    <div className="header-left">
        <img src={headerLogo} alt="" />
      </div>
      <div className="header-right">
        <p><i class="ri-home-4-line"></i><span>Home</span></p>
        <p><i class="ri-phone-line"></i><span>Contact Us</span></p>
      </div>
    </div>
    </div>
  )
}

export default Header
