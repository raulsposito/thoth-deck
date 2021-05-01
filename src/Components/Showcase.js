import React, { Component } from 'react';
import Data from './data.js'
import Card from './Card'

export default class Showcase extends Component {

  generateCards = () => {
    return Data.map((data, idx) => <Card key={idx} {...data} />);
    // map over your Data array and return an array of the correct JSX
  };

  render() {
    return (
      <div id="showcase">
        {this.generateCards()}
      </div>
    )
  }
}