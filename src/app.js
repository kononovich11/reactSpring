import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './pages/home/home';
import Login from './pages/login/login';
import store from './redux/store';

const App =  () => {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route
          path="/"
          component={Home}
          exact/>
        <Route
          path="/login"
          component={Login}/>
      </Switch>
    </BrowserRouter>
    </Provider>
  );
};

export default App;