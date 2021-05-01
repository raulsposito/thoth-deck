import React, { Component } from 'react';
import Card from './Card'
import Data from './data'

export default class Showcase extends Component {

  generateCards = () => {
    return Data.map((data, idx) => <Card key={idx} {...data} />);
    // map over your Data array and return an array of the correct JSX
  };


	render() {
		return <div id="movie-showcase">{this.generateCards()}</div>;
	}
}