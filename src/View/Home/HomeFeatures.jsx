import React from 'react'
import img from '../../assets/woman-making-photo-meal-her-phone.jpg';
import img2 from '../../assets/intro-1662479172.webp'
import img3 from '../../assets/istockphoto-838127738-612x612.jpg'
const HomeFeatures = () => {
  return (
    <>
      <div className='features_wrapper'>
        <h1 className='features_header'>Our Features</h1>
        <div className='features_cards_wrapper'>
            <div className='feature_card_div'>
                <div className='feature_card_img'>
                    <img src={img}/>
                </div>
                <h3>Upload Recipes</h3>
                <p>Lorem ipsum is random generated text <br/>
                Lorem ipsum is random generated
                </p>
            </div> 
            <div className='feature_card_div'>
            <div className='feature_card_img'>
                    <img src={img2}/>
                </div>
                <h3>View Recipes</h3>
                <p>Lorem ipsum is random generated text <br/>
                Lorem ipsum is random generated
                </p>
            </div>
            <div className='feature_card_div'>
            <div className='feature_card_img'>
                    <img src={img3}/>
                </div>
                <h3>Doubt Solve</h3>
                <p>Lorem ipsum is random generated text <br/>
                Lorem ipsum is random generated
                </p>
            </div>
        </div>
      </div>
    </>
  )
}

export default HomeFeatures
