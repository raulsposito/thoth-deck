import React from 'react';
import CardFront from './CardFront.js';
import CardBack from './CardBack.js';

const Card = (props) => {

  return (
    <div>
      <CardBack
        title={props.title}
      />
      <CardFront
        cover={props.cover}
        content={props.content}
      />
    </div>
  )
}

Card.defaultProps = {
  title: "Unknown",
  cover: 'default'
};

export default Card;
