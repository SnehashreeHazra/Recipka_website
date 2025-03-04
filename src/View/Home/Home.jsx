import React,{useEffect} from 'react'
import './Home.css'
import HomeBanner from './HomeBanner'
import HomeFeatures from './HomeFeatures'
import HomeAbout from './HomeAbout'
import HomeTestimonial from './HomeTestimonial'
import HomeTopRecipes from './HomeTopRecipes'
import DownloadApp from './DownloadApp'
import SmoothScroll from './SmoothScroll'
import Footer from '../../Layout/Footer'

const Home = () => {

  return (
    <>

   <HomeBanner/>
     <HomeAbout/>
     <HomeFeatures/>
    <DownloadApp/>
     <HomeTestimonial/>
     <HomeTopRecipes/>
     <Footer/>
 
   
 
    
     
      </>
  )
}

export default Home
