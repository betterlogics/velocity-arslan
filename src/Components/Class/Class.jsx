import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import "./Class.css"
class Class extends Component {
render() {
	const myStyle={
    backgroundImage: "url(/bmi.jpg)",
		height:'60vh',
		marginTop:'-22vh',
		fontSize:'50px',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
	};
	return (
	<div  style={myStyle}>
		<h3 className='p2'>Class Policy</h3>

    <div className="p21">
     <Link to="/">Home</Link>/Class 
    </div>
 
	</div>
	);
}
}

export default Class
