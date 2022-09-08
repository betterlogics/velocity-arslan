import React, { Component } from "react";
import "./Privacy.css";
class Privacy extends Component {
  render() {
    const myStyle = {
      backgroundImage: "url(/trainer-bag.jpg)",
      height: "auto",
      marginTop:'-12vh',
      fontSize: "50px",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    };
    return (
      <div style={myStyle}>
        <div className=" pp container mt-5">
         
          <div className="">
            <h3 className="p41"> When do we collect information?</h3>
            <p className="p42">
            We will obtain personal information from you when you complete an online Membership Agreement, we may also collect non-identifiable information about how you browse our website, using traffic tracking software, we may also collect your details by emails sent to Velocity Gym or email newsletter/sign up information forms or club viewing cards during club tours/visits.
            </p>
          </div>
          <div className="p43">
            <h3 className="p41"> What information do we collect?</h3>
            <p className="p42">
            The types of information we collect include name, date of birth, e-mail address, postal address, telephone number. Note that we do not store your credit card details on our web servers – this is securely stored with a third-party, bank-approved firm, whom we have contracted to collect payments in a passive manner.
            </p>
          </div>
          <div className="p43">
            <h3 className="p41"> How do we use this information?</h3>
            <p className="p42">
            We will use your personal information to provide you with the services, products or information that you have requested and for administration purposes. We may need to share your information with our service providers, associated organizations and agents for these purposes.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Privacy;
