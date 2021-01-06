import React, { Component } from 'react';
import goal1 from './pics/goals1.png';
import goal2 from './pics/goals2.png';
import goal3 from './pics/goals3.png';

export class Goals extends Component {
	render() {
		return (
			<div className='goals'>
				<h1>Achieve your goals with Grade-A</h1>
				<div className='boxes'>
					<div className='box'>
						<img src={goal1} alt='' ></img>
						<h2>Learn the latest skills</h2>
						<h4>like business analytics,</h4>
						<h4> graphic design,Python,</h4>
						<h4> and more</h4>
					</div>
					<div className='box'>
						<img src={goal2} alt='' ></img>
						<h2>Get ready for a career</h2>
						<h4>in high-demand fields</h4>
						<h4> like IT, AI and cloud </h4>
						<h4>engineering</h4>
					</div>
					<div className='box'>
						<img src={goal3} alt='' ></img>
						<h2>Upskill your organization</h2>
						<h4>with on-demand training</h4>
						<h4> and development</h4>
						<h4> programs</h4>
					</div>
				</div>
			</div>
		);
	}
}

export default Goals;
