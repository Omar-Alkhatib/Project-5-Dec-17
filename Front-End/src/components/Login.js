import React, { useState } from 'react';
import logo from './pics/logo.png';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

const Login = () => {
	const history = useHistory();
	const [email, setemail] = useState('');
	const [password, setpassword] = useState('');
	const [logErr, setlogErr] = useState('');

	const emailHandler = (e) => {
		setemail(e.target.value);
		setlogErr(false);
	};
	const passHandler = (e) => {
		setpassword(e.target.value);
		setlogErr(false);
	};

	const login = (email, password) => {
		// let token =
		// 	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIsInJvbGVfaWQiOjMsIm5hbWUiOiJPbWFyIEFsa2hhdGliIiwiYWRyZXNzIjoiSXJiZWQiLCJlbWFpbCI6Im9tYXIucS5hbGtoYXRpYkBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRUYnZ4Lk96MldHQnY4VDdlVFJHNVF1cTZsZjZKa1guUGY4eTNNeGtTdGphUEN5Y3didWJOcSIsInBob25lIjoiMDc5ODEzNTM1NyIsImlhdCI6MTYwOTk0OTI3OCwiZXhwIjoxNjA5OTg1Mjc4fQ.IguqDrb9c0gd5ZC0V-YIEwcEO5I_ENrCPwnwec40Ve4';

		axios
			.post(`http://localhost:5000/login`, { email, password })
			.then((response) => {
				if (response.data === 'Invalid Email or password..') {
					setlogErr(true);
				} else {
					let token = response.data;
					localStorage.setItem('token', token);
					const decoded = jwt_decode(token);
					console.log(decoded.role_id);
					if (decoded.role_id === 3) {
						history.push('/students');
						window.location.reload();
					} else if (decoded.role_id === 2) {
						history.push('/instructors/account');
						window.location.reload();
					} else if (decoded.role_id === 1) {
						history.push('/admin');
						window.location.reload();
					}
				}
			})
			.catch((err) => {
				throw err;
			});
	};

	return (
		<div className='loginCont'>
			<div className='login'>
				<div className='login-logo'>
					<img src={logo} alt=''></img>
					<p>Log In as student or Instructor</p>
					<div className='l-border'></div>
				</div>
				<div className='inputs'>
					<input
						placeholder='Email'
						name='email'
						onChange={emailHandler}
						required
					/>
					<input
						placeholder='Password'
						name='password'
						type='password'
						onChange={passHandler}
						required
					/>
					<h5>{logErr ? <span>Invalid Email or password..</span> : ''}</h5>
				</div>
				<div className='signup'>
					<button onClick={() => login(email, password)}>Login</button>
					<p>Login to enroll in courses and more . </p>
				</div>
			</div>
			<div className='not-sign'>
				<p>Don't have an account?</p>
				<a href='http://localhost:3000/signup'>Sign up</a>
			</div>
		</div>
	);
};

export default Login;
