import React from 'react';

const CardFront = (props) => {
	return (
		<div>
			<img src={props.cover} className="front" alt="card cover"></img>

			<div id="back">
				<p>{props.content}</p>
			</div>
		</div>
	);
}

export default CardFront;
