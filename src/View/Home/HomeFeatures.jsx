import React from 'react'
import img from '../../assets/woman-making-photo-meal-her-phone.jpg'
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
            </div> 
            <div className='feature_card_div'></div>
            <div className='feature_card_div'></div>
        </div>
      </div>
    </>
  )
}

export default HomeFeatures
