import React from 'react'
import "./Logos.css"
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import {Autoplay, Pagination } from "swiper";
export default function Logos() {
  return (
   <div class="container">
      <Swiper
    autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
    //     pagination={{
    //       clickable: false,
          
    //     }
    // }
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay,Pagination]}
        className="mySwiper"
      >
       
       <SwiperSlide className='sid d-block'>
      <img className='image2' src="5.png" alt="first" /> 
      
   </SwiperSlide>
   <SwiperSlide className='sid d-block'>
      <img className='image2' src="Untitled-5.png" alt="first" /> 
      
   </SwiperSlide>
   <SwiperSlide className='sid d-block'>
      <img className='image2' src="Untitled-4.png" alt="first" /> 
      
   </SwiperSlide>
   <SwiperSlide className='sid d-block'>
      <img className='image2' src="Untitled-1-3.png" alt="first" /> 
      
   </SwiperSlide>
   <SwiperSlide className='sid d-block'>
      <img className='image2' src="1.png" alt="first" /> 
      
   </SwiperSlide>
   <SwiperSlide className='sid d-block'>
      <img className='image2' src="Untitled-3.png" alt="first" /> 
      
   </SwiperSlide>
   <SwiperSlide className='sid d-block'>
      <img className='image2' src="Untitled-6.png" alt="first" /> 
      
   </SwiperSlide>
   
  
 
      </Swiper>

      </div>
    
  )
}
