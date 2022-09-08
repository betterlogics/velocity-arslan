import React from 'react'
import "./Club.css"
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import {Autoplay, Pagination } from "swiper";

import sweat from "../Assets/sweat.jpg";
import blaze from "../Assets/blaze.jpg";
import tabata from "../Assets/tabata.jpg";
import power from "../Assets/power.jpg";
import yoga from "../Assets/yoga.jpg";
import gym from "../Assets/gym.jpg";
import { ImWoman } from 'react-icons/im';
import { FaChild } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';

function Club() {
  return (
    <div >
    <div className='container'>
<div class="row">
      <div class=" bs col-lg-3 bg-light">
      <ImWoman className='l31 mt-5'/>
        <h2>YOGA</h2>
      <hr className='hr1'/>
        <p>Yoga is both spiritual & physical. Yoga uses breathing techniques and meditation. It helps to improve health & happiness. Yoga reduces stress,improves coordination,flexibility,concentration,sleep and digestion.</p>
        
      </div>
      <div class=" bs col-lg-3">
      <FaChild  className='l31 mt-5'/>
      <h2>Aerobics Studio</h2>
      <hr className='hr1'/>
        
        <p>Get in shape, lose weight and burn fat with Velocity Health and Fitness’s Aerobics Studio. We assure you of premium quality fitness. Register yourself and pick up the best spot for yourself.</p>
        
      </div>
      <div class="  bs col-lg-3 bg-light ">
      <AiFillStar className='l31 mt-5'/>
        <h2>Executive gym</h2>
      <hr className='hr1'/>
        <p>Our Executive gym is more of a supportive community of like-minded people who are here to give you the encouragement you need. Let’s make this happen together with helpful friendly coaches, state of art equipment. Everything you need is under one roof.</p>
        
      </div>
      <div class=" bs col-lg-3">
      <FaChild className='l31 mt-5'/>
        <h2>Steam / Sauna</h2>
      <hr className='hr1'/>
        <p>It removes trains, It is great part work out relaxation, which promotes healthy blood flow & increase flexibility is the best place to release your stress and unwind your mind. You will have an experience of a lifetime.</p>
        
      </div>
    </div>
    <div className="second">
      <h3>All About</h3>
      <h1>VELOCITY CLUB</h1>
    </div>
    <div className="row">
      <div className="col-lg-6 mt-5 ">
      Welcome to Velocity Health & Fitness club, Amanah Mall. Here at Velocity Fitness Club, we are offering a wide range of fitness services. We are always up to date on all new fitness trends. Velocity Health & Fitness has state of the art best GYM, Fitness studio & Steam/Sauna. Fitness classes and group training are also arranged on regular basis such as Tabata and Yoga. We believe that exercise, diet, and lifestyle should be treated as one in order to achieve maximum results. Our aim is to motivate, educate & encourage people of all ages to achieve their fitness goals & make their workout as effective & enjoyable as possible. We have the latest gym equipment of a leading branding known as Nautilus one. It’s time to Say good-bye two-steps-back approach to fitness. At Velocity Health & Fitness club, you’ll finally have all the latest resources and support you need to stay fit. To Know more about Velocity Gym sign up Today!
      </div>
      <div className=" col-lg-6 col-12 mt-5">
      <iframe className='you' src="https://www.youtube.com/embed/b-aNTXCC8kY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>

    </div></div>
<div className="third">
  .
  <h2 className='head'>Studio Classes at Velocity</h2><br/>
  <p className='para'>Velocity Health & Fitness Club specialize in life-changing fitness, nutrition, and lifestyle programs individualized to a person’s goals and needs.
   We do this through blaze & burn it classes sessions, which gives people the freedom to choose a healthier lifestye.
     So be ready to Express yourself to the Beat of Music and Start your body transformation now by joining our Special Studio Group Workout Classes at velocity health & fitness club.</p>
</div>
<Swiper
    autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        pagination={{
          clickable: true,
          
        }
    }
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
       
       <SwiperSlide className='sed d-block'><img className='image' src={sweat} alt="first" /> <h2 className='first'>Sweat</h2>
       <div class="middle">
    <div class="text"><b>Ditaiel</b></div>
  </div>
   </SwiperSlide>
        <SwiperSlide className='sed d-block'><img className='image' src={blaze} alt="" /><h2 className='first'>Blaze</h2>
        <div class="middle">
    <div class="text"><b>Ditaiel</b></div>
  </div>
  </SwiperSlide>
        <SwiperSlide className='sed d-block'><img className='image' src={tabata} alt="" /><h2 className='first'>Tabata</h2><div class="middle">
    <div class="text"><b>Ditaiel</b></div>
  </div>
  </SwiperSlide>
        <SwiperSlide className='sed d-block'><img className='image' src={power} alt="" /><h2 className='first'>Power</h2>
        <div class="middle">
    <div class="text"><b>Ditaiel</b></div>
  </div>
  </SwiperSlide>
        <SwiperSlide className='sed d-block'><img className='image' src={yoga} alt="" /><h2 className='first'>Yoga</h2>
        <div class="middle">
    <div class="text"><b>Ditaiel</b></div>
  </div>
  </SwiperSlide>
        <SwiperSlide className='sed  d-block'><img className='image' src={gym} alt="" /><h2 className='first'>Gym</h2>
        <div class="middle">
    <div class="text"><b>Ditaiel</b></div>
  </div>
  </SwiperSlide>
       
      </Swiper>
</div>
    
  )
}

export default Club