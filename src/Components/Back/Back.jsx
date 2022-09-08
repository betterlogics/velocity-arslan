import React, { Component } from 'react';
 import "./Back.css"
class Back extends Component {
  render() {
    const myStyle={
        backgroundImage: 
 "url('https://www.velocityfitness.pk/wp-content/uploads/2019/09/edit-4.jpg?id=3145')",
        height:'60vh',
        marginTop:'',
        fontSize:'30px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    return (
      <div style={myStyle}>
        .
       <h2 className='h22 mt-5 text-light'>CLASS SCHEDULE</h2>
      </div>
    );
  }
}
   
export default Back;
