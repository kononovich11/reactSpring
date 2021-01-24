import React from 'react';
import logotype from './spring-logo.svg';
import iconMenu from './icons8-menu.svg';
import arrow from './icons8-chevron-down-24.png';
import {useSelector, useDispatch} from 'react-redux';
import {changeTheme, clickMobileMenu, changeHoverFlag} from '../../redux/actions';
import './header.css';


const Header = () => {
  const dispatch = useDispatch();
  const {navbarData, hoverItem} = useSelector((state) => state);

  const setTheme = (e) => {
    dispatch(changeTheme(e.target.value));
  }

  const clickIcon = () => {
    dispatch(clickMobileMenu(true));
  }

  return (
    <div className="header container">
      <img src={logotype} alt="logo" className="logo"/>

      <ul className="navbar">
      {
        navbarData.map(item => {
          return ( 
          <li className="navbarItem">
              <div 
                className="navbarItemName"
                onMouseOver={(e) => {
                  dispatch(changeHoverFlag(item.name));
                }}>
                  {item.name}
              <div className="hoverContainer">           
              {
                item.showLinks && item.name === hoverItem && item?.options.map(option => {
                  return <div className="selectedOptions hoverItem">{option}</div>
                })
              } 
              </div>    
              </div>
              {
                item.showLinks && <img src={arrow} className="arrow" alt="arrow"/>
              }
          </li>);
        })
      }
      </ul>
    
      <input 
        type="range" 
        min="1" 
        max="2"
        className="range"
        onChange={setTheme}/>
        <img 
          src={iconMenu}
          alt="iconMenu" 
          className="iconMenu"
          onClick={clickIcon}/>
    </div>
  );
}

export default Header;