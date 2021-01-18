import React, {useState, useEffect} from 'react';

import Header from '../header';
import Description from '../description';
import CardsList from '../cardsList';
import Hover from '../hover';

import icon1 from '../icons/spring-boot.svg';
import icon2 from '../icons/spring-framework.svg';
import icon3 from '../icons/spring-data.svg';
import icon4 from '../icons/spring-cloud.svg';
import icon5 from '../icons/spring-data-flow.svg';
import icon6 from '../icons/spring-security.svg';


import './app.css';


const navbarData = [
    {
      name: 'Why Spring', 
      showLinks: true,
      options: ['Overview', 'Microservices', 'Reactive', 'Event Driven', 'Cloud', 'Web Applications', 'Serverless', 'Batch']
    },
    {
      name: 'Learn', 
      showLinks: true,
      options:['Overview', 'Quickstart', 'Guides', 'Blog'],
    },
    {
      name: 'Projects',
      showLinks: true,
      options:['Overview', 'Spring Boot', 'Spring Framework', 'Spring Cloud', 'Spring Cloud Data Flow', 'Spring Integration', 'Spring Batch', 'Spring Security', 'View all projects'],
    },
    {
      name: 'Training', 
      showLinks: false
    },
    {
      name: 'Support',
      showLinks: false
    },
    {
      name: 'Community',
      showLinks: true,
      options:['Overview', 'Events', 'Team'],
    }
  ];

const cardsData = [
  {
    icon: icon1, 
    title: 'Spring Boot', 
    description: 'Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible.'
  },
  {
    icon: icon2, 
    title: 'Spring Framework', 
    description: 'Provides core support for dependency injection, transaction management, web apps, data access, messaging, and more.'
  },
  {
    icon: icon3, 
    title: 'Spring Data', 
    description: 'Provides a consistent approach to data access – relational, non-relational, map-reduce, and beyond.'
  },
  {
    icon: icon4, 
    title: 'Spring Cloud', 
    description: 'Provides a set of tools for common patterns in distributed systems. Useful for building and deploying microservices.'
  },
  {
    icon: icon5, 
    title: 'Spring Cloud Data Flow', 
    description: 'Provides an orchestration service for composable data microservice applications on modern runtimes.'
  },
  {
    icon: icon6, 
    title: 'Spring Security', 
    description: 'Protects your application with comprehensive and extensible authentication and authorization support.'
  },
]


const App = () => {
  const [inputValue, setInputValue] = useState(null);
  const [renderCards, setRenderCards] = useState(null);
  const [theme, setTheme] = useState('2');
  const [mobileMenu, setMobileMenu] = useState(false); 
  
  useEffect(() => {
    let copyArr = [...cardsData];
    let filterArr = copyArr.filter(item => {
      return item.title.includes(inputValue) || item.description.includes(inputValue);
    });
    setRenderCards(filterArr);
  }, [inputValue]);

  let classNames = 'app';
  if(theme==='1') {
    classNames+=' dark';
  }

  if(mobileMenu) {
    return <Hover 
              navbarData = {navbarData} 
              setMobileMenu={setMobileMenu}/>
  } else {
    return (
      <div className={classNames}>
        <Header 
          navbarData = {navbarData} 
          setTheme={setTheme}
          setMobileMenu={setMobileMenu}
         />
        <Description/>
        <CardsList 
          classNames={classNames}
          cardsData={renderCards?.length?renderCards:cardsData} 
          setInputValue={setInputValue}
          />
      </div>
    )
  }
 
}

export default App;