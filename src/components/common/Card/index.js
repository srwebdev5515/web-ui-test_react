import React from 'react';
import './Card.scss';

const Card = ({ children, title }) => {
  return (
    <div className="card">
      <div className="card__title">{ title }</div>
      <div className="card__content">{ children }</div>
    </div>
  );
}

export default Card;
