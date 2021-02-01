import {
  SENT_CREADS,
  CHECK_ERROR,
  CHANGE_THEME,
  CLICK_MOBILEMENU,
} from './types';

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


const initialState = {
  creads: null,
  errorLogin: false,
  navbarData,
  theme: '2',
  mobileMenu: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SENT_CREADS:
      return {
        ...state,
        creads: action.creads,
      };
    case CHECK_ERROR:
      return {
        ...state,
        errorLogin: action.errorLogin,
      };
    case CHANGE_THEME:
      return {
        ...state,
        theme: action.theme,
      };
    case CLICK_MOBILEMENU:
      return {
        ...state,
        mobileMenu: action.mobileMenu,
      };
      default: return state;
  }
};


export default reducer;