import React from 'react';

import './card.css';

const Card = ({cardInfo, classNames}) => {
  const {icon, title, description} = cardInfo;
  classNames += ' card'
  return (
    <div className={classNames}>
      <img src ={icon}  className="cardLogo" alt="cardLogo"/>
      <div className="textContent">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Card;