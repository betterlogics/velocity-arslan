import React, { Component } from 'react';
import { Link } from 'react-router-dom';
  import "./Change.css"
class Change extends Component {
  render() {
    const myStyle={
        backgroundImage: 
 "url('https://www.velocityfitness.pk/wp-content/uploads/2016/10/fitness-summer-bag.jpg')",
        height:'auto',
        marginTop:'12%',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    return (
      <div style={myStyle}>.
        <h2 className='ready'> READY TO CHANGE YOUR PHYSIQUE</h2>
        <h4 className='read'>Avail Life time Registration  NOWONLY  <p className='p'>IN10k</p>
</h4>
<Link to='/Membermain' type="button" class=" bot btn ">
                   BECOME A MEMBER
                  </Link>
      </div>
    );
  }
}
   
export default Change;