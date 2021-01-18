import React from 'react';

import arrow from './icons8-chevron-down-24.png';
import './navbarItem.css';

const NavbarItem = ({itemValue}) => {
  return (
    <li className="navbarItem">
      {itemValue.name}
      {
        itemValue.showLinks && <img src={arrow} className="arrow" alt="arrow"/>
      }
    </li>
  );
}

export default NavbarItem;