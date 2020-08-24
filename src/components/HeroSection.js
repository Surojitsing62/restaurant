import React from 'react';
import '../App.css';
import Button from './Button';
import './HeroSection.css';
function HeroSection() {
	return (
		<div className='hero-container'>
			<video src='/BannerVideo/fragrant-pizza.mp4' autoPlay loop muted />
			<h1>Do good Be nice</h1>
			<p>Order pizza Repeat</p>
			<div className='hero-btns'>
				<Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
					GET STARTED
				</Button>
				<Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
					ORDER NOW<i className='far fa-play-circle'></i>
				</Button>
			</div>
		</div>
	);
}

export default HeroSection;
