import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
import Home from './pages/home/home';
import Login from './pages/login/login';


const App =  () => {
  const {creads} = useSelector((state) => state);

  if(creads) {
    return (
      <Switch>
        <Route path="/" component={Home} exact/>
        <Redirect to="/" />
      </Switch>
    )
  }

  return (
      <Switch>
        <Route
          path="/login"
          component={Login}/>
        <Redirect to="/login" />
      </Switch>
  );
};

export default App;