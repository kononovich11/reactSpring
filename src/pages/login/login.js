import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {sendLoginData} from '../../redux/actions/sendLoginData';
import './login.css';


const Login = ({history}) => {
  const dispatch = useDispatch();
  const {errorLogin, checkedUser} = useSelector(state => state);

  let userName = null;
  let password = null;

  const getInputValue = (item) => {
    return item.value;
  }

const submitData = async (e) => {
    e.preventDefault();
    const itemsForm = [...e.target.children];
    itemsForm.forEach(item => {
      switch (item.id) {
        case 'userName':  userName = getInputValue(item); break;
        case 'password': password =  getInputValue(item); break;
        default: return item;
      }
    });

    dispatch(sendLoginData({userName, password}));
  }
  
  if(checkedUser) {
    history.push('/');
  }

  return (
    <div className="formContainer">
    <div className="login">
    <h1>Login Form</h1>
      { errorLogin && <div className="errorLogin">{errorLogin}</div> }
      <form className="form" onSubmit={submitData}>
        <label htmlFor="userName">Enter user name:</label>
        <input type="text" id="userName" className="inputLogin" placeholder="UserName" name="userName"/>
        <label htmlFor="password">Enter password:</label>
        <input type="password" id="password" className="inputLogin" placeholder="Password" name="password"/>
        <button type="submit" className="submitBtn">Submit</button>
      </form>
      
        <div className="regAccount">
          You are haven't account?
          <button 
              className="btnReg"
              onClick={() => {history.push('/signup')}}>
                  Click me!
          </button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Login);