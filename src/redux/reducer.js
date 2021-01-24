import icon1 from '../components/icons/spring-boot.svg';
import icon2 from '../components/icons/spring-framework.svg';
import icon3 from '../components/icons/spring-data.svg';
import icon4 from '../components/icons/spring-cloud.svg';
import icon5 from '../components/icons/spring-data-flow.svg';
import icon6 from '../components/icons/spring-security.svg';

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
];

const initialState = {
  creads: null,
  errorLogin: false,
  navbarData,
  theme: '2',
  mobileMenu: false,
  clickedItem: null,
  cardsData,
  inputValue: '',
  renderCards: cardsData,
  hoverFlag: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SENT_CREADS':
      return {
        ...state,
        creads: action.creads,
      };
    case 'CHECK_ERROR':
      return {
        ...state,
        errorLogin: action.errorLogin,
      };
    case 'CHANGE_THEME':
      return {
        ...state,
        theme: action.theme,
      };
    case 'CLICK_MOBILEMENU':
      return {
        ...state,
        mobileMenu: action.mobileMenu,
      };
    case 'CLICK_MENUITEM': 
      return {
        ...state,
        clickedItem: action.clickedItem,
      };
    case 'CHANGE_INPUTVALUE': 
    return {
      ...state,
      inputValue: action.inputValue,
    };
    case 'CHANGE_RENDERCARDS': 
    return {
      ...state,
      renderCards: action.renderCards,
    };
    case 'CHANGE_HOVERFLAG': 
    return {
      ...state,
      hoverItem: action.hoverItem,
    };
      default: return state;
  }
};


export default reducer;