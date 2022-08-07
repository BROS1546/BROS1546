import React from 'react';
import { FaUserAlt } from 'react-icons/fa';

const Login = () => {
	const handleFormSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div className='login'>
			<div className='login-avatar'>
				<FaUserAlt className='login-avatar-image' />
			</div>
			<h1 className='heading-login'>LOG IN</h1>
			<div className='form'>
				<form action='' onSubmit={(e) => handleFormSubmit(e)}>
					<div className='input-group'>
						<label htmlFor='email'>Email / Tel: </label>
						<br />
						<input type='text' id='email' placeholder='Enter your email / phone number'/>
						<br />
						<label htmlFor='password'>Password: </label>
						<br />
						<input type='password' id='password' placeholder='Enter your password'/>
					</div>
					<button type='submit' className='button-submit'>
						Sign in
					</button>
				</form>
				<p className='forgot-text'>Forgot password?</p>
				<p className='create-acc'>
					Don't have an account? Let's <a href='/'>create a new account</a>
				</p>
			</div>
		</div>
	);
};

export default Login;
