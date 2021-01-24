const sentCreads = (creads) => {
  return {
    type: 'SENT_CREADS',
    creads,
  };
};

const checkError = (errorLogin) => {
  return {
    type: 'CHECK_ERROR',
    errorLogin,
  };
};

const changeTheme = (theme) => {
  return {
    type: 'CHANGE_THEME',
    theme,
  };
};

const clickMobileMenu = (mobileMenu) => {
  return {
    type: 'CLICK_MOBILEMENU',
    mobileMenu,
  };
};

const clickMenuItem = (clickedItem) => {
  return {
    type: 'CLICK_MENUITEM',
    clickedItem,
  };
};

const changeInputvalue = (inputValue) => {
  return {
    type: 'CHANGE_INPUTVALUE',
    inputValue,
  }
};

const changeRenderCards = (renderCards) => {
  return {
    type: 'CHANGE_RENDERCARDS',
    renderCards,
  }
};

const changeHoverFlag = (hoverItem) => {
  return {
    type: 'CHANGE_HOVERFLAG',
    hoverItem,
  }
}

export {
  sentCreads,
  checkError,
  changeTheme,
  clickMobileMenu,
  clickMenuItem,
  changeInputvalue,
  changeRenderCards,
  changeHoverFlag,
}