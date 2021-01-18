import React from 'react';

import Card from '../card';
import './cardList.css';

const CardsList = ({cardsData, setInputValue, classNames}) => {
  classNames += ' cardList';
  const getInputValue = (e) => {
    setInputValue(e.target.value);
  }

  return (
    <div className={classNames}>
      <input 
        type="text"
        placeholder="Search" 
        className="search" 
        onChange={getInputValue}/>
      <div className="gridContainer">
      {
        cardsData.map(item => {
          return <Card cardInfo={item} classNames={classNames}/>;
        })
      }
      </div>
    </div>
  );
}

export default CardsList;
