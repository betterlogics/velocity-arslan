import React, { Component } from "react";
import "./About4.css";
class About4 extends Component {
  render() {
    const myStyle = {
      backgroundImage: "url(/trainer-bag.jpg)",
      height: "auto",
      marginTop:'-16vh',
      fontSize: "50px",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    };
    return (
      <div style={myStyle}>
        <div className="container">
          <div >
            <h3 className="p41">Our Vision</h3>
            <p className="p42">
              To foster a community that celebrates a person’s individual
              journey towards a higher quality of life by attaining his fitness
              goal
            </p>
          </div>
          <div className="p43">
            <h3 className="p41"> Our Mission</h3>
            <p className="p42">
              Our mission is to provide an entertaining, educational, friendly
              and inviting, functional and innovative experience of
              uncompromising quality that meets the health and fitness needs of
              the entire family
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About4;
