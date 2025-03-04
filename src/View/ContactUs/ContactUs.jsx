import React from 'react'
import ContactUsForm from './ContactUsForm'
import ContactUsSocial from './ContactUsSocial'
import './ContactUs.css'
import Footer from '../../Layout/Footer'
import SmoothScroll from '../Home/SmoothScroll'

const ContactUs = () => {
  return (
    <>
<SmoothScroll>
<div className='contact-us-wrapper'>
    <div className="contact-us-baner">
      <h2 className='contact-us-txt'>Contact Us</h2>
      <p className='contact-us-to-home-link'>Contact Us <i class="ri-arrow-right-s-line"></i> Home</p>
    </div>
    <div className="contact-us-form-container">
      <h2 className='start-a-conversation'>Let's Start a Conversation</h2>
      <div className="contact-us-container">
        <ContactUsSocial />
        <ContactUsForm />
      </div>
    </div>
    </div>
    <Footer/>
</SmoothScroll>
 
    
  
    </>
  )
}

export default ContactUs
