import React from 'react'
import video from '../../assets/istockphoto-2173110820-640_adpp_is.mp4'
import video2 from '../../assets/istockphoto-1477370443-640_adpp_is.mp4'
import video3 from '../../assets/istockphoto-1282849126-640_adpp_is.mp4'
const HomeTopRecipes = () => {
  return (
    <>
      <div className='home_top_recipes_wrapper'>
        <h1 className='features_header'>Our Top Recipes</h1>
        <div className='top_videos_wrapper'>
        {[video,video2,video3].map((e,i)=>{
            return(
                <div className='top_videos'>
             <video src={e} muted autoPlay loop></video>
            </div>
            )
        })}
          
        </div>
      </div>
    </>
  )
}

export default HomeTopRecipes
