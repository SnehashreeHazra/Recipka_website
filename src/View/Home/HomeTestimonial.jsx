import React from 'react'
import img from '../../assets/a650286ac35fe165d48d39cc1673d087.jpg'
import img2 from '../../assets/5f462dcfba987090d3314ca981013b6c.jpg'
import img3 from '../../assets/7e32e1d6728f1f5bd2c115e661660c1c.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const HomeTestimonial = () => {
   
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1099,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 610,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              
            }
          },
          {
            breakpoint: 499,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
    <>
      <div className='home_testimonial_wrapper'>
        <h1 className='features_header'>Testimonials</h1>
        <div className='testimonial_wrapper'>
        <Slider {...settings}>
        <div className='testimonial_div'>
                <div className='client_img'>
                    <img src={img}/>
                </div>
              
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s .</p>
                <h2>Mark Johnson <br/>
                <span>Bussines Owner</span></h2>
            </div>
            <div className='testimonial_div'>
                <div className='client_img'>
                    <img src={img2}/>
                </div>
              
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s .</p>
                <h2> Allison Mark <br/>
                <span>Bussines Owner</span></h2>
            </div>
            <div className='testimonial_div'>
                <div className='client_img'>
                    <img src={img3}/>
                </div>
              
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s .</p>
                <h2>John Doe <br/>
                <span>Bussines Owner</span></h2>
            </div>
        </Slider>

        </div>
      </div>
    </>
  )
}

export default HomeTestimonial
