import React, { Component } from 'react';

export default class CardFront extends Component {
	render() {
		return (
			<img src={this.props.cover} className="cover" alt="card cover"></img>
		);
	}
}