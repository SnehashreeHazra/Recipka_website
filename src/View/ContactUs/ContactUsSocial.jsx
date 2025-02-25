import React from 'react'

const ContactUsSocial = () => {
  return (
    <div className='contact-us-social-wrapper'>
    <div className="contact-us-social-container">

      <div className="address-phone-mobile-website-wrapper">

      <div className="address-div">
      <div className="location-logo"><i class="ri-map-pin-line"></i></div>      
      <div className="address-content">
        <p className='add-text'>ADDRESS</p>
        <p className='small-txt'>12 Street, North Avenue, India</p>
      </div>
    </div>
      <div className="phone-div">
      <div className="location-logo">

      <i class="ri-phone-fill"></i>
      </div>
      <div className="address-content">
        <p className='add-text'>PHONE</p>
        <p className='small-txt'>+880 123 4567 890</p>
      </div>
      </div>
      <div className="mobile-div">
      <div className="location-logo">
      <i class="ri-smartphone-line"></i>

      </div>
      <div className="address-content">
        <p className='add-text'>MOBILE</p>
        <p className='small-txt'>+880 123 4567 890</p>
      </div>
      </div>
      <div className="website-div">
      <div className="location-logo">
      <i class="ri-global-line"></i>
      </div>
      <div className="address-content">
        <p className='add-text'>WEBSITE</p>
        <p className='small-txt'>www.demo.com</p>
      </div>
      </div>
      </div>
      <div className="follow-us-div">
        <p className='follow-us-txt'>Follow Us</p>
        <div className="icons-div">
        <i class="ri-facebook-line"></i>
        <i class="ri-twitter-line"></i>
        <i class="ri-instagram-line"></i>
        <i class="ri-linkedin-line"></i>
        <i class="ri-youtube-line"></i>
        </div>
      </div>
    </div>
      </div>
  )
}

export default ContactUsSocial
