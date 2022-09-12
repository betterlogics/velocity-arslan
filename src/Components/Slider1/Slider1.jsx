import React from 'react'
import { Link } from 'react-router-dom';
import Carousel from "react-bootstrap/Carousel";

import first from "../Assets/velocity.jpg";
import second from "../Assets/yoga.jpg";
import third from "../Assets/edited2.jpg";
function Slider1() {
  return (
    <div>
        <Carousel variant="dark">
        <Carousel.Item>
          <img className="d-block w-100" src={first} alt="First slide" />
          <Carousel.Caption>
            <h1 className="h1">POLISH YOUR SOUL TO GET IT RIGHT</h1>
            <p className="p">Yoga Class will be started by 1st June 22, Limited Slots available!</p>
            <Link to='/Membermain' type="button" class="btn  mb-3">Apply Online</Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={second} alt="Second slide" />
          <Carousel.Caption>
            <h1 className="h1">10K REGISTRATION FEE FOR LIFETIME</h1>
            <p className="p">Mega SUMMER Offer, SAVE BIG on lifetime Registrations. Limited Slots available!</p>
            <Link to='/Membermain' type="button" class="btn  mb-3">Apply Online</Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={third} alt="Third slide" />
          <Carousel.Caption>
            <h1 className="h1">BUILD YOUR BODY STRONG</h1>
            <p className="p">
            Ready to change your physique, but can't work out in the gym?
            </p>
            <Link to='/Membermain' type="button" class="btn  mb-3">Apply Online</Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Slider1
