import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {loadingSignupData} from '../../redux/actions/loadingSignupData';
import '../login/login.css';
import './signUp.css';


const SignUp = () => {
    const {requestDataSignup, registrationErr, successAdding} = useSelector(state=>state);
    const dispatch = useDispatch();
    const history = useHistory();
    const [signupObj, setSignupObj] = useState(null);

    useEffect(() => {
        dispatch(loadingSignupData(signupObj)); 
      }, [signupObj]);
 
    const sendDataSignup = async(e) => {
        e.preventDefault();
        const idInputs = [...document.getElementsByTagName('input')].map(item => item.id);
        const valuesInputs = [...document.getElementsByClassName('signup')].map(item => item.value);
        const sendingData = Object.assign(...idInputs.map((key,index) => ({[key]: valuesInputs[index]})));
        setSignupObj(sendingData);    
    }

    if (successAdding?.length) {
        history.push('/login'); 
    }

    return (
        <div className="formContainer">
            <div className="signUp">
            <form onSubmit={sendDataSignup} className="form">
                <h1>Create a New Account</h1>
                {registrationErr && <div>Sorry, but user name exist</div>}
                <label for="userName">Enter username:</label>
                {requestDataSignup && <div className="signupErr">{requestDataSignup.firstName}</div>}
                <input type="text" placeholder="User Name" name="userName" id="userName" className="signup"/>
                <label for="password">Enter password:</label>
                {requestDataSignup && <div className="signupErr">{requestDataSignup.passwordRepeat}</div>}
                <input type="password" placeholder="Password" name="password" id="password" className="signup"/>
                <label for="passwordR">Repeat password:</label>
                {requestDataSignup && <div className="signupErr">{requestDataSignup.lastName}</div>}
                <input type="password" placeholder="Password" name="passwordRepeat" id="passwordRepeat" className="signup"/>
                <label for="firstName">Enter first name:</label>
                {requestDataSignup && <div className="signupErr">{requestDataSignup.firstName}</div>}
                <input type="text" placeholder="First Name" name="firstName" id="firstName" className="signup"/>
                <label for="lastName">Enter last name:</label>
                {requestDataSignup && <div className="signupErr">{requestDataSignup.lastName}</div>}
                <input type="text" placeholder="Last Name" name="lastName" id="lastName" className="signup"/>
                <label for="age">Enter age:</label>
                {requestDataSignup && <div className="signupErr">{requestDataSignup.age}</div>}
                <input type="number" placeholder="Age" name="age" id="age" className="signup"/>
                <button type="submit" className="submitBtn">Submit</button>
                <div className="regAccount">
                    You are already have account?
                    <button 
                        className="btnReg"
                        onClick={() => {history.push('/login')}}>
                            Click me!
                    </button>
                </div>
            </form>
          </div>
        </div>
    );
};

export default SignUp;