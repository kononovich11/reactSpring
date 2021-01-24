import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {sentCreads, checkError} from '../../redux/actions';
import {withRouter} from 'react-router-dom';
import './login.css';


const Login = ({history}) => {
  const dispatch = useDispatch();
  const {errorLogin} = useSelector(state => state);

  let userName = null;
  let password = null;

  const getInputValue = (item) => {
    return item.value;
  }

  const submitData = (e) => {
    e.preventDefault();
    const itemsForm = [...e.target.children];
    itemsForm.forEach(item => {
      switch (item.id) {
        case 'userName':  userName = getInputValue(item); break;
        case 'password': password =  getInputValue(item); break;
        default: return item;
      }
    });

    if(userName === 'admin' && password === '1234') {
      dispatch(sentCreads({userName, password}));
      history.push('/');
    } else {
      dispatch(checkError(true));
    }
  }

  return (
    <div className="loginContainer">
    <div className="login">
    <h1>Login Form</h1>
      <form onSubmit={submitData} className="form">
      { errorLogin && <div className="errorLogin">Sorry, but you have error in the user name or the password. Try again!</div> }
        <label htmlFor="userName">Enter user name:</label>
        <input type="text" id="userName" className="inputLogin" placeholder="UserName"/>
        <label htmlFor="password">Enter password:</label>
        <input type="password" id="password" className="inputLogin" placeholder="Password"/>
        <button type="submit" className="submitBtn">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default withRouter(Login);