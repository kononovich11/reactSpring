import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import Loader from '../loader/Loader';
import axios from 'axios';
import './cardList.css';

import icon1 from '../icons/spring-boot.svg';
import icon2 from '../icons/spring-framework.svg';
import icon3 from '../icons/spring-data.svg';
import icon4 from '../icons/spring-cloud.svg';
import icon5 from '../icons/spring-data-flow.svg';
import icon6 from '../icons/spring-security.svg';

import {loadingDataPosts} from '../../redux/actions/loadingDataPosts';
import {changeInput} from '../../redux/actions/changeInput';


const CardsList = () => {
  const icons = [icon1, icon2, icon3, icon4, icon5, icon6];
  const {theme,loading, dataPosts, filterPosts, inputValue, loadingError} = useSelector(state=>state);
  const dispatch = useDispatch();
  const history = useHistory();

  let classNames = 'app cardList';
  const renderPosts = filterPosts?.length ? filterPosts :dataPosts;

  useEffect(() => {
    dispatch(loadingDataPosts());
  }, []);


  if(theme === '1') {
    classNames = 'app dark cardList';
  }

  if(loadingError) {
    return (
      <div>Sorry, but something went wrong</div>
    );
  } else {

    return (
      < div className={classNames}>
        <input
          type="text"
          placeholder="Search"
          className="search"
          name="search"
          onChange={(e) => {
            dispatch(changeInput(e.target.value));
          }}
          />
        {loading? <Loader/>:<div className="gridContainer">
        {
          filterPosts?.length === 0  && inputValue !== null? <div className="error">Sorry, your request was not found</div> :
          renderPosts?.map((item,index) => {
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
        </div> }
      </div>
    );
  }

}

export default CardsList;
