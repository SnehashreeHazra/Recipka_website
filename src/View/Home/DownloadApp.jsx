import React from 'react'
import img from '../../assets/0ff2b554820307ecc90e5bea7798b6ec.jpg'
import img2 from '../../assets/5a902dbf7f96951c82922875.png'
import img3 from '../../assets/5a902db97f96951c82922874.png'
const DownloadApp = () => {
  return (
    <>
    <div className='download_app_wrapper'>
    <div className='download_content_wrapper'>
        <div className='left_download_section'>
          <div className='download_app_content'>
            <h1>Download</h1>
            <h3>Our New App</h3>
            <h4>RECIPKA</h4>

            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <div className='playstore_app_store_wrapper'>
              

              <div className='playstore_div'>
                <img src={img3}/>
              </div>
              <div className='playstore_div'>
              <img src={img2}/>
               
              </div>
            </div>
          </div>
        </div>
        <div className='right_download_section'>
           <div className='phone_background_circle'></div>
           <div className='phone_div'>
            <img src={img}/>
           </div>
        </div>
      </div>
    </div>
     
    </>
  )
}

export default DownloadApp
