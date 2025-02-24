import React from 'react'
import img from '../../assets/4c9b99f4a2d15d050743078d48822f20.jpg'
const HomeAbout = () => {
  return (
    <>
      <div className='home_about_wrapper'>
        <h1 className='features_header'>About Us</h1>
        <div className='home_about_main_wrapper'>
            <div className='left_about_img_div'>
                <img src={img}/>
            </div>
            <div className='right_about_content_div'>
                <div className='right_about_content'>
                    <h1>About Recipka</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting</p>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default HomeAbout
