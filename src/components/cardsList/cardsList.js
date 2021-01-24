import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {changeInputvalue, changeRenderCards} from '../../redux/actions';
import './cardList.css';

const CardsList = () => {
  const {cardsData, inputValue, renderCards, theme} = useSelector(state=>state);
  const dispatch = useDispatch();
  let classNames = 'app cardList';

  useEffect(() => {
    const copyArr = [...cardsData];
    const filterArr = copyArr.filter(item => {
      return item.title.includes(inputValue) || item.description.includes(inputValue);
    });
    dispatch(changeRenderCards(filterArr));
  }, [inputValue]);

  const getInputValue = (e) => {
    dispatch(changeInputvalue(e.target.value));
  }

  if(theme === '1') {
    classNames = 'app dark cardList';
  }

  return (
    <div className={classNames}>
      <input 
        type="text"
        placeholder="Search" 
        className="search" 
        onChange={getInputValue}
        />
      <div className="gridContainer">
      {
        renderCards.length === 0?  <div className="error">Sorry, your request was not found</div> :
        renderCards.map(item => {
          return (
            <div className= 'app cardList card'>
              <img src ={item.icon}  className="cardLogo" alt="cardLogo"/>
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

export default CardsList;
