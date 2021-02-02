import {
  SENT_CREADS,
  CHECK_ERROR,
  CHANGE_THEME,
  CLICK_MOBILEMENU,
  LOADING_ERROR,
} from '../types';

const sentCreads = (creads) => {
  return {
    type: SENT_CREADS,
    creads,
  };
};

const checkError = (errorLogin) => {
  return {
    type: CHECK_ERROR,
    errorLogin,
  };
};

const changeTheme = (theme) => {
  return {
    type: CHANGE_THEME,
    theme,
  };
};

const clickMobileMenu = (mobileMenu) => {
  return {
    type: CLICK_MOBILEMENU,
    mobileMenu,
  };
};

const loadingError = (loadingError) => {
  return {
    type: LOADING_ERROR,
    loadingError,
  }
};

export {
  sentCreads,
  checkError,
  changeTheme,
  clickMobileMenu,
  loadingError,
}