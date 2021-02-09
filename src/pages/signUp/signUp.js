import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {loadingSignupData} from '../../redux/actions/loadingSignupData';
import FieldSignup from '../../components/fieldSignup/fieldSignup';
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

    const inputData = [
        { for: 'userName',value: 'Enter username:', type: 'text', placeholder: 'User Name'},
        { for: 'password',value: 'Enter password:', type: 'password', placeholder: 'Password'},
        { for: 'passwordR',value: 'Repeat password:', type: 'password', placeholder: 'Password'},
        { for: 'firstName',value: 'Enter first name:', type: 'text', placeholder: 'First Name'},
        { for: 'lastName',value: 'Enter last name:', type: 'text', placeholder: 'Last Name'},
        { for: 'age',value: 'Enter age:', type: 'number', placeholder: 'Age'},
    ];
 
    const sendDataSignup = async(e) => {
        e.preventDefault();
        const idInputs = inputData.map(item => item.for); 
        const valuesInputs = [...e.target].filter(item => item.className === 'signup').map(item => item.value);
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
                {
                    inputData.map(item => {
                        return (
                            <FieldSignup dataInput={item}/>
                        )
                    })
                }
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