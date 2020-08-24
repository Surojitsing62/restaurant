import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
class LoginPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			emailid: '',
			password: ''
		};
	}
	HandleInput = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};
	HandleSubmit = (e) => {
		e.preventDefault();
		console.log(this.state);
		if (!this.state.emailid || !this.state.password) {
			alert('Form has empty fields!');
			return false;
		} else {
			axios
				.post('http://localhost/Treat_Restaurent/Client_Panel/logindata', {
					email: this.state.emailid,
					pass: this.state.password
				})
				.then(({ data }) => {
					if (data.success === 1) {
						alert(data.msg);
						// this.setState({ redirect: true });
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
							<Link to='www.linkedin.com'>
								<i className='fab fa-linkedin' />
							</Link>
						</div>
						<form id='login' className='input-group' onSubmit={this.HandleSubmit}>
							<input
								type='text'
								className='input-field'
								name='emailid'
								placeholder='Email Id'
								value={this.state.emailid}
								onChange={this.HandleInput}
								required
							/>
							<input
								type='password'
								className='input-field'
								name='password'
								placeholder='Enter Password'
								value={this.state.password}
								onChange={this.HandleInput}
								required
							/>
							<input type='checkbox' className='check-box' />
							<span className='span-box'>Remeber Password</span>
							<button type='submit' className='submit-btn'>
								Log In
							</button>
						</form>
					</div>
				</div>
			</>
		);
	}
}

export default LoginPage;
