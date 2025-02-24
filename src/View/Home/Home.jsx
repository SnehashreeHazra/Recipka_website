import React,{useEffect} from 'react'
import './Home.css'
import HomeBanner from './HomeBanner'
import HomeFeatures from './HomeFeatures'
import HomeAbout from './HomeAbout'
import HomeTestimonial from './HomeTestimonial'
import HomeTopRecipes from './HomeTopRecipes'


const Home = () => {

  return (
    <>
     <HomeBanner/>
     <HomeAbout/>
     <HomeFeatures/>
     <HomeTestimonial/>
     <HomeTopRecipes/>
     
      </>
  )
}

export default Home
