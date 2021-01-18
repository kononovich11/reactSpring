import React from 'react';

import NavbarItem from '../navbarItem';
import './navbar.css';

const Navbar = ({navbarData}) => {
  return (
    <ul className="navbar">
      {
        navbarData.map(item => {
          return <NavbarItem itemValue={item}/>
        })
      }
    </ul>
  );
}

export default Navbar;
