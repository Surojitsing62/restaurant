import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
	return (
		<div className='cards'>
			<h1>TREAT's online ordering</h1>
			<h2>Yummy pizza delivered fast & fresh</h2>
			<div className='cards__container'>
				<div className='cards__wrapper'>
					<ul className='cards__items'>
						<CardItem
							src='/BannerVideo/pizza34.jpg'
							text='Delicius Pizza Corner'
							label='Pizaa'
							path='/services'
						/>
						<CardItem
							src='/BannerVideo/pizzapice.jpg'
							text='Delicius Pizza Corner'
							label='Pizaa'
							path='/services'
						/>
						<CardItem
							src='/BannerVideo/pizzajd.jpg'
							text='Delicius Pizza Corner'
							label='Pizaa'
							path='/services'
						/>
						<CardItem
							src='/BannerVideo/pizza34.jpg'
							text='Delicius Pizza Corner'
							label='Pizaa'
							path='/services'
						/>
					</ul>
					<ul className='cards__items'>
						<CardItem
							src='/BannerVideo/pizza34.jpg'
							text='Delicius Pizza Corner'
							label='Pizaa'
							path='/services'
						/>
						<CardItem
							src='/BannerVideo/pizzapice.jpg'
							text='Delicius Pizza Corner'
							label='Pizaa'
							path='/services'
						/>
						<CardItem
							src='/BannerVideo/pizzajd.jpg'
							text='Delicius Pizza Corner'
							label='Pizaa'
							path='/services'
						/>
						<CardItem
							src='/BannerVideo/pizza34.jpg'
							text='Delicius Pizza Corner'
							label='Pizaa'
							path='/services'
						/>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Cards;
