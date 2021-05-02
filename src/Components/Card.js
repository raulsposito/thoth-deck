import React, { Component } from 'react';
import CardFront from './CardFront.js';
import CardBack from './CardBack.js';

export default class Card extends Component {

    render() {
      return (
        <div className="card">
          {/* which component should receive which props? */}
          <CardFront cover={this.props.cover} />
          <CardBack 
          title={this.props.title}
          />
        </div>
      )
    }
  }
  
  // Don't forget your default props!
  Card.defaultProps = {
    title: "Unknown",
    cover: 'default'
  };