import React, { Component } from 'react';

export default class CardFront extends Component {
	render() {
		return (
			<img src={this.props.cover} className="card-front" alt="card cover"></img>
		);
	}
}