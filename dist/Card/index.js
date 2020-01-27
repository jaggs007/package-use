import React from 'react';
import './index.css';

const Card = props => {
  return React.createElement("div", {
    className: "card"
  }, props.children);
};

export default Card;