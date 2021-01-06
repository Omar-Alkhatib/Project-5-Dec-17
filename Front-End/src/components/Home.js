import React, { } from 'react';
import { Route } from 'react-router-dom';
import BecomeInstructor from './BecomeInstructor';
import Goals from './Goals';
import Interface from './Interface';
import Team from './Team';
import TopCategories from './TopCategories';

const Home = () => {
	return (
		<Route>
				<Interface />
				<Goals />
				<TopCategories />
				<BecomeInstructor />
				<Team />
		</Route>
	);
};

export default Home;

