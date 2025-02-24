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
      <h3 style={{
        width:'50%',
        marginInline:'auto',
        textAlign:'center'
      }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br/>
      </h3>
    </div>
    </div>
  )
}

export default HomeBanner
