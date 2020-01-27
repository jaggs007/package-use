import React from 'react';
import './index.css';

const Card = props => {
  const {
    title,
    description,
    footer
  } = props;
  return React.createElement("div", {
    className: "Card"
  }, React.createElement("h1", {
    className: "Card-title"
  }, title), React.createElement("div", {
    className: "Card-description"
  }, description), React.createElement("div", {
    className: "Card-footer"
  }, footer));
};

export default Card;