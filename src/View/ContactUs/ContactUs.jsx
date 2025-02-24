import React from 'react'
import ContactUsForm from './ContactUsForm'
import ContactUsSocial from './ContactUsSocial'

const ContactUs = () => {
  return (
    <div className='contact-us-wrapper'>
      <h2>Let's Start a Conversation</h2>
      <div className="contact-us-container">
        <ContactUsSocial />
        <ContactUsForm />
      </div>
    </div>
  )
}

export default ContactUs
