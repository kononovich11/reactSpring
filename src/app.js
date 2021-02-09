import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
import Home from './pages/home/home';
import Login from './pages/login/login';
import SignUp from './pages/signUp/signUp';

const App =  () => {
  const {checkedUser} = useSelector((state) => state);

  return (
    <Switch>
      <Route
        path="/"
        exact
        render={() => {
          return checkedUser? <Redirect to="/home"/>  :
          <Redirect to="/login"/>;
        }}
      />
     <Route path="/home" component={Home} exact/>
     <Route path="/signup" component={SignUp} exact/>
     <Route path="/login" component={Login} exact/>

   </Switch>
  )

};

export default App;