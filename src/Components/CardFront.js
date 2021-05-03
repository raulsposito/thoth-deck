import React, { Component } from 'react';

export default class CardFront extends Component {
	render() {
		return (
			<div>
				<img src={this.props.cover} className="front" alt="card cover"></img>

				<div id="back">
					<p>{this.props.content}</p>
				</div>
			</div>
		);
	}
}