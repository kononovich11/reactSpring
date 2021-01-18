import React from 'react';

import Logo from '../logo';
import Navbar from '../navbar';
import iconMenu from './icons8-menu.svg';

import './header.css';

const Header = ({navbarData, setTheme, setMobileMenu}) => {
  const changeTheme = (e) => {
    setTheme(e.target.value);
  }

  const clickIcon = () => {
    setMobileMenu(true);
  }

  return (
    <div className="header container">
      <Logo/>
      <Navbar navbarData={navbarData}/>
      <input 
        type="range" 
        min="1" 
        max="2"
        className="range"
        onChange={changeTheme}/>
        <img 
          src={iconMenu}
          alt="iconMenu" 
          className="iconMenu"
          onClick={clickIcon}/>
    </div>
  );
}

export default Header;