import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
import Home from './pages/home/home';
import Login from './pages/login/login';
// import {useHistory} from 'react-router-dom';


const App =  () => {
  const {creads} = useSelector((state) => state);

  const isLogIn = localStorage.getItem('isLogIn')

  if(creads || isLogIn) {
    localStorage.setItem('isLogIn', true);
    return (
      <Switch>
        <Route path="/" component={Home} exact/>
        <Redirect to="/" />
      </Switch>
    )
  } else {
    return (
        <Switch>
          <Route
            path="/login"
            component={Login}/>
          <Redirect to="/login" />
        </Switch>
    );
  }
};

export default App;