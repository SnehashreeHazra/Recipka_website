import React,{useEffect} from 'react'
import './Home.css'
import HomeBanner from './HomeBanner'
import HomeFeatures from './HomeFeatures'
import HomeAbout from './HomeAbout'
import HomeTestimonial from './HomeTestimonial'
import HomeTopRecipes from './HomeTopRecipes'
import DownloadApp from './DownloadApp'

const Home = () => {

  return (
    <>
     <HomeBanner/>
     <HomeAbout/>
     <HomeFeatures/>
    <DownloadApp/>
     <HomeTestimonial/>
     <HomeTopRecipes/>
     
      </>
  )
}

export default Home
