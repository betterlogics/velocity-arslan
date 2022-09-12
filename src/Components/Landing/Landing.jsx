import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FiMail } from "react-icons/fi";
import { BiPhone } from "react-icons/bi";
import { FiFacebook } from "react-icons/fi";
import { FaTwitterSquare } from "react-icons/fa";
import { ImYoutube2 } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import "./Landing.css";
function Landing() {
  return (
    <div className="container-fluid bg-dark text-light">
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12 d-flex mx-3 mt-3">
          <BiPhone className="mt-1 text-pri" />{" "}
          <a className="link" href="#">
            03224966664{" "}
          </a>{" "}
          | <FiMail className="mt-1" />{" "}
          <a className="link" href="#">
            {" "}
            info@velocityfitness.pk
          </a>
        </div>
        <div className="col-lg-7 col-md-6 col-sm-12 d-flex mt-3   justify-content-end ">
          <p>
            Monday to Saturday ( 07-Am to 10-Pm ) |{" "}
           <a className ="mx-1"  href="#"><FiFacebook className ="mx-1" /></a> 
           <a className ="mx-1" href="#"> <FaTwitterSquare className="mx-1" /></a>
            <a className ="mx-1"  href="#"><ImYoutube2  className="mx-1" /> </a>
          <a className ="mx-1" href="#" target="_blank" rel="noopener noreferrer">  <FaInstagram className="mx-1" /></a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Landing;
