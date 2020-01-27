import React from 'react';
import './index.css';

const Card = (props) => {
  return (
    <div className="card">
      <div>This is the custom card</div>
      {props.children}
    </div>
  );
};

export default Card;