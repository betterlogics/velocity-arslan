import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Slider.css";

// import required modules

import waseem from "../Assets/waseem.jpg";
import imran from "../Assets/imran.jpg";
import maham from "../Assets/maham.jpg";
import azeem from "../Assets/azeem.jpg";
import zeeshan from "../Assets/zeeshan.jpg";
import ali from "../Assets/ali.jpg";
function Slider() {
  return (
    <div className='main'>
    <div className=' container'>
   
      {/* second animation */}
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active container">
      <div className="row">
        <div className="col-lg-6">
<div>
  <img className='img2'src={waseem} alt="" />
<h3 className='class'>Waleed Amir<span> / Gym Member</span></h3>

					<p className='para'>Love this gym – a variety of instructors is excellent. Very clean &amp; safe environment. Lovely, friendly atmosphere. I recommend Velocity Health &amp; Fitness gym for daily workouts.</p>												
</div>
        </div>
        <div className="col-lg-6">
        <img className='img2'src={imran} alt="" />
<h3 className='class'>Imran<span> / Gym Trianer</span></h3>

					<p className='para'>With over 200 fitness locations in the Lahore, Velocity&nbsp; Fitness is a well-known spot of fitness centers.&nbsp; velocity fitness offers best Top quality fitness equipment, personal training, fitness classes for Steam/Sauna Tabata and Yoga.</p>			
          </div>
      </div>
    </div>
    <div class="carousel-item">
    <div className="row">
        <div className="col-lg-6">
<div>
  <img className='img2'src={maham} alt="" />
<h3 className='class'>Maham Khan<span> / Gym Member</span></h3>

					<p className='para'>There’s so much to like about this gym. i am VERY happy members for two years. They have Clean, new equipment and nice employees. Gym has plenty of equipment. You can use it all too, Highly recommend this gym for anyone into fitness as they have a big range of equipment’s.</p>												
</div>
        </div>
        <div className="col-lg-6">
        <img className='img2'src={azeem} alt="" />
<h3 className='class'>Azeem<span> / Gym Member</span></h3>

					<p className='para'>Recently signed up to this velocity fitness here and I cannot complain. Great staff and they are very helpful. The gym environment is very clean with great equipment!</p>			
          </div>
      
    </div>
    </div>
    <div class="carousel-item">
    <div className="row">
        <div className="col-lg-6">
<div>
  <img className='img2'src={zeeshan} alt="" />
<h3 className='class'>Zeeshan Ali<span> / Gym Member</span></h3>

					<p className='para'>Overlall atmosphere at this gym is really great<br/>
&amp; calm. they have amazing machines (what looks like to be new) of top brand nautilus.</p>.											
</div>
        </div>
        <div className="col-lg-6">
        <img className='img2'src={ali} alt="" />
<h3 className='class'>Ali Ahamd<span> / Gym Member</span></h3>

					<p className='para'>Been using Velocity Health &amp; Fitness gym for over 2 years now and honestly hope I never have to change gyms! I can always get on the best equipment I want to use at peak hours (after work) unlike other gyms I have used in the past.I highly recommended Velocity Health &amp; Fitness Gym.</p>			
          </div>
      </div>
    </div>
    </div>
  
  <button class="carousel-control-prev " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon " aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon " aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> </div></div>
    
  )
}

export default Slider
