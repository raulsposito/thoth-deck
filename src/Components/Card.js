import React, { Component } from 'react';
import CardFront from './CardFront.js';
import CardBack from './CardBack.js';

export default class Card extends Component {

    render() {
      return (
        <div>
          <CardBack
            title={this.props.title}
          />
          <CardFront
            cover={this.props.cover}
            content={this.props.content}
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