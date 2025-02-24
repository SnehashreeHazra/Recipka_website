import React from 'react'

const ContactUsForm = () => {
  return (
    <div className='contact-us-form-wrapper'>
    <h2>Send Message</h2>
      <div className="contact-us-form-container">
        <form className='contact-us-form'>

          <div className="form-group">
            <label htmlFor="">First Name</label>
            <input type="text" placeholder='First Name' />
          </div>
          <div className="form-group">
            <label htmlFor="">Last Name</label>
            <input type="text" placeholder='Last Name' />
          </div>
          <div className="form-group">
            <label htmlFor="">Email</label>
            <input type="text" placeholder="Email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="" placeholder='Write Message'></textarea>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactUsForm
