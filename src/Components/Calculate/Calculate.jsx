import React, { Component } from "react";
import "./Calculate.css";
class Calculate extends Component {
  render() {
    const myStyle = {
      backgroundImage:
        "url('https://www.velocityfitness.pk/wp-content/uploads/2017/06/bmi.jpg?id=2670')",
      height: "auto",
      width: "100%",
      fontSize: "20px",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    };
    return (
      <div style={myStyle}>
        <div className="container">
          <div className="row">
            <div className=" content col-lg-6">
              <h2>CALCULATE YOUR BMI</h2>
              <p>
                Our BMI calculator is a great way to know whether you’re a
                healthy weight for your height. Find out where you lie on the
                BMI scale with our online BMI calculator
              </p>
              <div>
                <div className="check d-flex ">
                  <div class="form-check d-flex">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label
                      class="form-check-label text-light "
                      for="flexRadioDefault1"
                    >
                      Metric Units
                    </label>
                  </div>
                  <div class="form-check d-flex">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      checked
                    />
                    <label
                      class="form-check-label text-light"
                      for="flexRadioDefault2"
                    >
                      Imperial Units
                    </label>
                  </div>
                </div>
                <div>
                  <button type="button" class=" bot btn mt-5 ">
                    CALCULATE
                  </button>
                </div>
              </div>
            </div>
            <div className="content col-lg-6">
              <table class="table">
                <thead>
                  <tr>
                    {/* <th scope="col">#</th> */}
                    <th scope="col" className="px-5">
                      BMI
                    </th>
                    <th scope="col">Weight Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="l">
                    {/* <th scope="row">1</th> */}
                    <td>Below 18.5</td>
                    <td classname="">Underweight</td>
                  </tr>
                  <tr>
                    <th scope="row">18.5 - 24.9</th>
                    <td>Normal</td>
                  </tr>
                  <tr>
                    <th scope="row">25 - 29.9</th>
                    <td colspan="2">Overweight</td>
                  </tr>
                  <tr>
                    <th scope="row">30 and Above</th>
                    <td colspan="2">Obese</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculate;
