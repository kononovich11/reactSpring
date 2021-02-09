import {
  SENT_CREADS,
  CHECK_ERROR,
  CHANGE_THEME,
  CLICK_MOBILEMENU,
  DATA_POSTS_LOADING_START,
  DATA_POSTS_LOADING_COMPLETED,
  CHANGE_INPUT_VALUE,
  FILTER_POSTS_COMPLETED,
  LOADING_ERROR,
  SEND_SIGNUP_DATA,
  REGISTRATED_USER_ERROR,
  SUCCESS_ADDING,
  CHECKED_USER,
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
  dataPosts: [],
  loading: false,
  inputValue: null,
  filterPosts: [],
  loadingError: null,
  requestDataSignup: null,
  registrationErr: null,
  successAdding: null,
  checkedUser: null,
};

const reducer = (state = initialState, action, payload) => {
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
    case DATA_POSTS_LOADING_START:
      return {
        ...state,
        loading: true,
      };
    case DATA_POSTS_LOADING_COMPLETED:
      return {
        ...state,
        loading: false,
        dataPosts: action.dataPosts
      };

      case CHANGE_INPUT_VALUE:
        return {
          ...state,
          // loading: true,
          inputValue: action.inputValue,
        };

      case FILTER_POSTS_COMPLETED:
        return {
          ...state,
          // loading: false,
          filterPosts: action.filterPosts,
        };

      case LOADING_ERROR:
        return {
          ...state,
          loading: false,
          dataPosts: [],
          loadingError: action.loadingError,
        };

      case SEND_SIGNUP_DATA:
        return {
          ...state,
          requestDataSignup: action.objErrors,
        };

      case REGISTRATED_USER_ERROR:
        return {
          ...state,
          registrationErr: action.errRegUser,
        };

      case SUCCESS_ADDING:
        return {
          ...state,
          successAdding: action.successAdding,
        };

      case CHECKED_USER:
        return {
          ...state,
          checkedUser: action.payload,
        };

      default: return state;
  }
};


export default reducer;