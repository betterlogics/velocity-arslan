import React from 'react'
import "./Latest.css"
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import {Autoplay, Pagination } from "swiper";
export default function Latest() {
  return (
    <div>
      <h2 className='blog  m-5'>LATEST FROM BLOGS  </h2>
      <div className="slider">
      <Swiper
    autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
    //     pagination={{
    //       clickable: true,
          
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
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay,Pagination]}
        className="mySwiper"
      >
       
       <SwiperSlide className='sad d-block'>
       <div class="date">5<br/>Aug<br/>2022</div><img className='image1 hover-zoom' src="next.jpg" alt="first" /> 
       <h3 className='hipper' ><a href="#">” Top 10 Best Professional Gym Exercises“</a></h3>
       <div class="text-align-left">
       Every man who is interested in fitness has a preferred method, piece of gear, or program. Some people enjoy daily circuit training, others adhere to bodybuilding regimens, and still, others partake in a variety of…
  </div>
   </SwiperSlide>
        <SwiperSlide className='sad d-block'>
        <div class="date">5<br/>Aug<br/>2022</div><img className='image1 hover-zoom' src="next2.jpg" alt="" />
        <h3 className='hipper'> <a href="#">Top 10 Best Professional Gym Exercises“</a> </h3>
        <div class="text-align-left">
        Every man who is interested in fitness has a preferred method, piece of gear, or program. Some people enjoy daily circuit training, others adhere to bodybuilding regimens, and still, others partake in a variety of…
  </div>
  </SwiperSlide>
        <SwiperSlide className='sad d-block'>
        <div class="date">5<br/>Aug<br/>2022</div> <img className='image1 hover-zoom' src="next3.jpg" alt="" />
        <h3 className='hipper'><a href="#">” Top 10 Best Professional Gym Exercises“</a></h3>
       <div class="text-align-left">
       Every man who is interested in fitness has a preferred method, piece of gear, or program. Some people enjoy daily circuit training, others adhere to bodybuilding regimens, and still, others partake in a variety of…
  </div>
  </SwiperSlide>
        <SwiperSlide className='sad d-block'>
        <div class="date">5<br/>Aug<br/>2022</div><img className='image1 hover-zoom' src="next.jpg" alt="" />
        <h3 className='hipper'><a  href="#">” Top 10 Best Professional Gym Exercises“</a></h3>
        <div class="text-align-left">
        Every man who is interested in fitness has a preferred method, piece of gear, or program. Some people enjoy daily circuit training, others adhere to bodybuilding regimens, and still, others partake in a variety of…
  </div>
  </SwiperSlide>
        <SwiperSlide className='sad d-block'>
        <div class="date">5<br/>Aug<br/>2022</div><img className='image1 hover-zoom' src="next4.jpg" alt="" />
        <h3 className='hipper'><a href="#">” Top 10 Best Professional Gym Exercises“</a></h3>
        <div class="text-align-left">
        Every man who is interested in fitness has a preferred method, piece of gear, or program. Some people enjoy daily circuit training, others adhere to bodybuilding regimens, and still, others partake in a variety of…
  </div>
  </SwiperSlide>
        <SwiperSlide className='sad d-block'>
        <div class="date">5<br/>Aug<br/>2022</div><img className='image1  hover-zoom' src="next5.jpg" alt="" />
        <h3 className='hipper'><a href="#">” Top 10 Best Professional Gym Exercises“</a></h3>
        
        <div class="text-align-left">
        Every man who is interested in fitness has a preferred method, piece of gear, or program. Some people enjoy daily circuit training, others adhere to bodybuilding regimens, and still, others partake in a variety of…
  </div>
  </SwiperSlide>
  <button class="carousel-control-prev " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon " aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="dec carousel-control-next " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class=" inc carousel-control-next-icon " aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
      </Swiper>

      </div>
    </div>
  )
}
