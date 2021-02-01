import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import Loader from '../loader/Loader';
import axios from 'axios';
import './cardList.css';

import icon1 from '../icons/spring-boot.svg';
import icon2 from '../icons/spring-framework.svg';
import icon3 from '../icons/spring-data.svg';
import icon4 from '../icons/spring-cloud.svg';
import icon5 from '../icons/spring-data-flow.svg';
import icon6 from '../icons/spring-security.svg';


const CardsList = () => {
  const icons = [icon1, icon2, icon3, icon4, icon5, icon6];
  const {theme} = useSelector(state=>state);

  const [cardsData, setCardsData] = useState(null);
  const [renderData, setRenderData] = useState(null);
  const [inputValue, setInputValue] = useState('');

  let classNames = 'app cardList';

  useEffect(() => {
    axios.get('http://localhost:3002')
      .then(res => {
        setCardsData(res.data);
        setRenderData(res.data);
      });
  }, []);

  useEffect(() => {
    if(inputValue !== '') {
      axios.get(`http://localhost:3002/search?inputValue=${inputValue}`)
        .then(async res => {
        await setRenderData(res.data);
      });
    }
  }, [inputValue]);


  if(theme === '1') {
    classNames = 'app dark cardList';
  }


  if (!cardsData?.length) {
    return <Loader/>
  } else {
    return (
      < div className={classNames}>
        <input
          type="text"
          placeholder="Search"
          className="search"
          name="search"
          onChange={(e) => setInputValue(e.target.value)}
          />
        <div className="gridContainer">
        {
          renderData?.length === 0?  <div className="error">Sorry, your request was not found</div> :
          renderData?.map((item,index) => {
            return (
              <div className= 'app cardList card' key = {index}>
                <img src={icons[index]} className="cardLogo" alt="cardLogo"/>
                <div className="textContent">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            )
          })
        }
        </div>
      </div>
    );
  }
}

export default CardsList;
