import React, { useEffect, useState } from 'react'
import headerLogo from '../assets/r logo.png'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const [navbar,setNavbar]=useState(false)
  const [sidebar,setSidebar]=useState(false)
  const scroll =()=>{
    if(window.scrollY > 50) {
      setNavbar(true)
    }else{
      setNavbar(false)
    }
  }
  window.addEventListener('scroll',scroll);
  const Sidebar = () =>{
    return <>
   <div className='nav_sidebar_div'>
   <p><NavLink className={'nav-link'} to="/"><i class="ri-home-4-line"></i><span>Home</span></NavLink></p>
        <p><NavLink  className={'nav-link'} to="/contact-us"><i class="ri-phone-line"></i><span>Contact Us</span></NavLink></p>
        <p><NavLink  className={'nav-link'} to="/terms-conditions"><i class="fa-regular fa-file"></i><span>Terms & Conditions</span></NavLink></p>
   </div>
    </>
 
  }
  return (
    <>
   
    <div className={navbar ? 'header_main_background' : 'header_main'}>
{sidebar &&    <Sidebar/>}
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
      <i onClick={(()=>setSidebar(!sidebar))} class="fa-solid fa-bars-staggered"></i>
        <p><NavLink className={'nav-link'} to="/"><i class="ri-home-4-line"></i><span>Home</span></NavLink></p>
        <p><NavLink  className={'nav-link'} to="/contact-us"><i class="ri-phone-line"></i><span>Contact Us</span></NavLink></p>
        <p><NavLink  className={'nav-link'} to="/terms-conditions"><i class="fa-regular fa-file"></i><span>Terms & Conditions</span></NavLink></p>
      </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Header
