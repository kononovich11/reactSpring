import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import arrow from '../header/icons8-chevron-down-24.png';
import multiply from './icons8-multiply-24.png';
import {clickMobileMenu, clickMenuItem} from '../../redux/actions';
import './hover.css';

const Hover = () => {
  const {navbarData, clickedItem} = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <div className="hover">
       <img 
        src={multiply} 
        className="multiply"
        alt="multiply"
        onClick ={() => dispatch(clickMobileMenu(false))}/>  
      {
        navbarData.map(item => {
          return (
            <div className="menuOption">
              <div className="selectRow">
                <div className="selectTitle">{item.name}</div>
                {
                  item.showLinks && <img 
                  src={arrow} 
                  className="arrow" 
                  alt="arrow"
                  onClick={() => {dispatch(clickMenuItem(item))}}/>
                }
              </div>
              {
                item === clickedItem && clickedItem?.options.map(option => {
                  return <div className="selectedOptions">{option}</div>
                })
              } 
            </div>
          )
        })
      }
    </div>
  );
}

export default Hover;