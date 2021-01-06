import React from 'react';
import smile from './pics/smile.jpg';

const BecomeInstructor = () => {
	return (
		<div className='smile'>
		<img src={smile} alt=''></img>
		<div>
			<h1>Become Instructor</h1>
			<h3>
				Top instructors from around the world teach<br></br> the students on
				Grade-A. We provide the<br></br> tools and skills to teach what you
				love.
			</h3>
			<button>Start Teaching Today</button>
		</div>
	</div>
	)
}

export default BecomeInstructor

