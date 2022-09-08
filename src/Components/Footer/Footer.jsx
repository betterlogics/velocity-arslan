import React from 'react'
import "./Footer.css"
import { GrFacebookOption } from 'react-icons/gr';
import { AiFillInstagram} from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
export default function Footer() {
  return (
<div className="maan bg-dark">
<div class=" l33 container text-light bg-dark">
  <div class="row">
    <div class="bb col-lg-3 col-md-6 col-sm-12 mt-5  bg-dark">
        <h4>About Company</h4>
        <p className='l34'>Welcome to Velocity Health & Fitness club, Amanah Mall. Here at Velocity Fitness Club, we are offering a wide range of fitness services like Functional Training’s, see more</p>
        <div>
        <GrFacebookOption className='l11'/>
        <AiFillInstagram className='l11'/>
        <AiOutlineTwitter className='l11'/>
        <AiFillYoutube className='l11'/>
        </div>
    </div>
    <div class="bb col-lg-4 col-md-6 col-sm-12 mt-5  bg-dark">
        <h4>Follow Us on Twitter</h4>
       <div className="l12">
        <div className="l15 d-flex ">
          <img className="l13" src="logo.png" alt="" />
        <a className="l14 mt-4" href="#">Velocity Health... </a>
        </div>
        <p className='l16 mt-3 '>Celebrating 🇵🇰 Defence Day with 65% of on Registration Fee 💚 
Get yourself registered…
The offer is only valid on 6 September</p>
<img className='l17 ' src="tw.jpg" alt="" />
<button type="button" class=" mt-5 btn-primary btn-sm"> Veiw more on Twitter</button>
       </div>
    </div>
    <div class="bb col-lg-2 col-md-6 col-sm-12 mt-5   bg-dark">
        <h4>Quick Access</h4>
        <div className="l35 mt-4">
            <a href="#">Home</a><br />
            <a href="#">Trainers</a><br />
            <a href="#">Schedule</a><br />
            <a href="#">Blog</a><br />
            <a href="#">Download</a><br />
            <a href="#">Contact Us</a>
        </div>
        </div>
    <div class=" bb  col-lg-3 col-md-6 col-sm-12 mt-5  bg-dark">
        <h4 className=" " >Contact</h4>
        <p className="l36 mt-3"> 5th Floor, Amanah Mall, Model Town Link Rd, Muhammadpura, Lahore, Punjab 54700</p>
        <p className="l36 "> 03224966664</p>
 
 <p className="l36 ">info@velocityfitness.pk</p>
    </div>
  </div>
</div>
<div className='end'>
© Copyright Velocity Health & Fitness 2019. All Right Reserved. Designed & Developed by Team Ipsum !
</div>

        </div>

  )
}
