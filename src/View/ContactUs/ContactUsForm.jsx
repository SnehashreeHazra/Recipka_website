import React from 'react'

const ContactUsForm = () => {
  return (
    <div className='contact-us-form-wrapper'>
      <div className="contact-us-form-container">
       <h2 className='send-msg-txt'>How Can We Help You ?</h2>
        <form className='contact-us-form'>
        <div className="form-row">

          <div className="form-group">
            <label htmlFor="">First Name</label>
            <input type="text" placeholder='First Name' required/>
          </div>
          <div className="form-group">
            <label htmlFor="">Last Name</label>
            <input type="text" placeholder='Last Name' required/>
          </div>
        </div>
          <div className="form-group">
            <label htmlFor="">Email</label>
            <input type="text" placeholder="Email" required/>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="" placeholder='Write Message'></textarea>
          </div>
          <button className='send-msg-btn'>Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default ContactUsForm
