import React from 'react';
import { Link } from 'react-router-dom';
import wlc from './pics/wlc.jpg';

const Interface = () => {
	return (
		<div className='wlc' >
			<div className='innerTxt'>
				<img src={wlc} alt=''></img>
				<h1>
					For every student,<br></br>every classroom.<br></br>Real results.
					</h1>
				<h4>Build skills with courses, online from best instructors</h4>
				<button ><Link to='/signup' >Join For Free</Link></button>
			</div>
		</div>
	)
}

export default Interface
