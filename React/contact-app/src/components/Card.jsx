import React from 'react';

function Card(props){
	return(
			<div className='card'>
				<div className='top'>
					<p className='name'>{props.name}</p>
					<img className='circle-img' src={props.img} />
				</div>
				<div className='bottom'>
					<div className='info'>
					<p>{props.ph}</p>
					<p>{props.email}</p>
					</div>
				</div>
			</div>
		);
};

export default Card;