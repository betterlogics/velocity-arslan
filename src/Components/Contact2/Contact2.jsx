import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { MdDateRange } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import "./Contact2.css";
function Contact2() {
  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-left mb-4">
        <h2>DROP US A LINE</h2>
      </div>
      <div className="row">
        <div className="col-lg-6 col-sm-12 ">
          <div class="input-group mb-3">
            <span class="input-group-text bg-light" id="basic-addon1">
              <BsFillPersonFill className="ico2" />
            </span>
            <input
              type="text"
              class="form-control "
              placeholder="Your Name"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text bg-light" id="basic-addon1">
              <HiOutlineMail className="ico2" />
            </span>
            <input
              type="text"
              class="form-control "
              placeholder="Email"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>

          <div class="input-group mb-3">
            <span class="input-group-text bg-light" id="basic-addon1">
              <BsTelephoneFill className="ico2" />
            </span>
            <input
              type="text"
              class="form-control "
              placeholder="Phone"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          <div class="input-group">
            <span class="input-group-text bg-light">
              <HiOutlineMail className="ico2" />
            </span>
            <textarea
              class="form-control"
              placeholder="any querry"
              aria-label="With textarea"
            ></textarea>
          </div>
          <div class="d-grid gap-2">
            <button class="btn2 " type="button">
              Submit
            </button>
          </div>
        </div>
        <div className="col-lg-6 col-sm-12 ">
          <div class="mapouter">
            <div class="gmap_canvas">
              <iframe
                class="gmap_iframe"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://maps.google.com/maps?width=900&amp;height=900&amp;hl=en&amp;q=lahore amanah mall&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
              <a href="https://mcpenation.com/">https://mcpenation.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact2;
