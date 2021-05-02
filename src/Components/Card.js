import React, { Component } from 'react';
import CardFront from './CardFront.js';
import CardBack from './CardBack.js';
import TheFool from '../assets/the-fool-thoth-tarot.png'

const posterMap = {
    'the-fool-thoth-tarot': TheFool
  }

export default class Card extends Component {

    render() {
      return (
        <div className="card">
          {/* which component should receive which props? */}
          <CardFront poster={posterMap[this.props.poster]} />
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
    poster: 'default'
  };