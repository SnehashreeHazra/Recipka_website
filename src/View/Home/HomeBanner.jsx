import React ,{useEffect}from 'react'
import './Home.css'
const HomeBanner = () => {
  useEffect(()=>{
    window.scrollTo({top:0,behavior:'smooth'})
     },[])
  return (
    <div className="home-wrapper" >
    <div className='home_banner_content_div'>
      <h1>Lorem Ipsum Lorem</h1>
      <h3>Lorem IPsum lorem Ipsum Lorem Ipsum Lorem IPsum lorem Ipsum Lorem Ipsum<br/>
      Lorem IPsum lorem Ipsum Lorem Ipsum Lorem Ipsum<br/>
      Lorem IPsum<br/>
      </h3>
    </div>
    </div>
  )
}

export default HomeBanner
