import React from 'react';
import Header from '../../components/header/header';
import {useSelector} from 'react-redux';
import Hover from '../../components/hover/hover';
import Description from '../../components/description/description';
import CardsList from '../../components/cardsList/cardsList';
import './home.css';

const Home = () => {
  const {mobileMenu, theme} = useSelector(state => state);
  let classNames = 'app';

  if(theme === '1') {
    classNames+=' dark';
  }

  if(mobileMenu) {
    return <Hover/>
  } else {
    return (
      <div className={classNames}>
        <Header/>
        <Description/>
        <CardsList/>
      </div>
    );
  }
};

export default Home;