import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

class RegisterPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			email: '',
			address: '',
			phone: '',
			pass: '',
			redirect: false
		};
		this.HandleInput = this.HandleInput.bind(this);
	}
	HandleInput = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};
	HandleSubmit = (e) => {
		e.preventDefault();
		console.log(this.state);
		if (!this.state.username || !this.state.email || !this.state.address || !this.state.phone || !this.state.pass) {
			alert('Form has empty fields!');
			return false;
		} else {
			axios
				.post('http://localhost/Treat_Restaurent/Client_Panel/insertdata', {
					name: this.state.username,
					email: this.state.email,
					address: this.state.address,
					phone: this.state.phone,
					pass: this.state.pass
				})
				.then(({ data }) => {
					if (data.success === 1) {
						alert(data.msg);
						this.setState({ redirect: true });
					} else {
						alert(data.msg);
					}
				})
				.catch((error) => {
					console.log(error);
				});
		}
	};
	render() {
		var logingpage = this.state.redirect;
		if (logingpage === true) {
			return <Redirect to='/log' />;
		}
		return (
			<>
				<div className='hero'>
					<div className='form-box'>
						<div className='button-box'>
							<div id='btn'></div>
							<Link to='/log'>
								<button type='button' className='toggle-btn'>
									Log In
								</button>
							</Link>
							<Link to='/reg'>
								<button type='button' className='toggle-btn'>
									Register
								</button>
							</Link>
						</div>
						<div className='social-emoji'>
							<Link to='www.facebook.com'>
								<i className='fab fa-facebook-f' />
							</Link>
							<Link to='www.twitter.com'>
								<i className='fab fa-twitter' />
							</Link>
							<Link to='www.linkdein.com'>
								<i className='fab fa-linkedin' />
							</Link>
						</div>
						<form id='register' className='input-group' onSubmit={this.HandleSubmit}>
							<input
								type='text'
								name='username'
								className='input-field'
								placeholder='Enter Your Name'
								value={this.state.username}
								onChange={this.HandleInput}
								required
							/>
							<input
								type='email'
								name='email'
								className='input-field'
								value={this.state.email}
								onChange={this.HandleInput}
								placeholder='Enter Email Id'
								required
							/>
							<input
								type='text'
								name='address'
								className='input-field'
								placeholder='Enter Address Number'
								value={this.state.address}
								onChange={this.HandleInput}
								required
							/>
							<input
								type='text'
								name='phone'
								className='input-field'
								placeholder='Enter Phone Number'
								value={this.state.phone}
								onChange={this.HandleInput}
								required
							/>
							<input
								type='password'
								name='pass'
								className='input-field'
								placeholder='Enter Your Password'
								value={this.state.pass}
								onChange={this.HandleInput}
								required
							/>
							<input type='checkbox' className='check-box' />
							<span className='span-box'>I agree to the trems and conditions</span>
							<button type='submit' className='submit-btn'>
								Regiter
							</button>
						</form>
					</div>
				</div>
			</>
		);
	}
}

export default RegisterPage;
