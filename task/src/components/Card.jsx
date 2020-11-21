import React from 'react';

function Card(props) {
	return (
		<div className='card'>
			<div className='header__img'>
				<img src={props.cover} width='100%' height='100%' />
				<a href='#'>
					<i class='fas fa-pen'></i>
				</a>
			</div>
			<div className='card__body'>
				<img className='profile__pic' src={props.img} />
				<div className='card__info'>
					<h3 className='Person__name'>{props.name}</h3>
					<p className='Poerson__location'>{props.location}</p>
					<p className='Poerson__job'>{props.job}</p>
					<p className='Poerson__about'>{props.about}</p>
				</div>
				<div className='socials'>
					<a href={props.facebook} target='_blank'>
						<i class='fab fa-facebook'></i>
					</a>

					<a href={props.linkedin} target='_blank'>
						<i class='fab fa-linkedin'></i>
					</a>

					<a href={props.github} target='_blank'>
						<i class='fab fa-github'></i>
					</a>
				</div>
			</div>
		</div>
	);
}

export default Card;
