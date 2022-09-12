import React, { Component } from "react";
import "./About3.css";
class About3 extends Component {
  render() {
    const myStyle = {
      backgroundImage: "url(/back2.webp)",
      height: "auto",
      paddingbottom: "5vh",
      fontSize: "50px",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    };
    return (
      <div style={myStyle}>
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-6 col-sm-12">
              <h3 className="p31 ">Why Choose Us?</h3>
              <p className="p32">
                Velocity health and fitness is a project brought to you by
                Amanah Mall. Whether you are a beginner or a fitness freak, we
                will help you to get into a healthier shape. You don’t need to
                stress about your health and fitness as we provide each and
                every facility because we are a state-of-the-art fitness center
                after all
              </p>
            </div>
            <div className=" nicha col-lg-5 col-md-6 col-sm-12 ">
              .
              <p class="skill html mt-5">
                <span class="level"></span>
              </p>
              <p class="skill css">
                <span class="level"></span>
              </p>
              <p class="skill html">
                <span class="level"></span>
              </p>
              <p class="skill css">
                <span class="level"></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About3;
