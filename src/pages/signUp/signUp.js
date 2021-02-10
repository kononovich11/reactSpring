import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {loadingSignupData} from '../../redux/actions/loadingSignupData';
import FieldSignup from '../../components/fieldSignup/fieldSignup';
import '../login/login.css';
import './signUp.css';


const SignUp = () => {
    const {registrationErr, successAdding} = useSelector(state=>state);
    const dispatch = useDispatch();
    const history = useHistory();
    const [signupObj, setSignupObj] = useState(null);
    const [form, setForm] = useState([]);

    const filtered = {
        age: "",
        firstName: "",
        lastName: "",
        password: "",
        passwordRepeat: "",
        userName: "",
    };

    const inputData = [
        { for: 'userName',value: 'Enter username:', type: 'text', placeholder: 'User Name'},
        { for: 'password',value: 'Enter password:', type: 'password', placeholder: 'Password'},
        { for: 'passwordRepeat',value: 'Repeat password:', type: 'password', placeholder: 'Password'},
        { for: 'firstName',value: 'Enter first name:', type: 'text', placeholder: 'First Name'},
        { for: 'lastName',value: 'Enter last name:', type: 'text', placeholder: 'Last Name'},
        { for: 'age',value: 'Enter age:', type: 'number', placeholder: 'Age'},
    ];


    useEffect(() => {
        dispatch(loadingSignupData(signupObj));
      }, [signupObj]);


    const sendDataSignup = async(e) => {
        e.preventDefault();
        form.forEach(item => {
            let key = Object.keys(item)[0];
            filtered[key] = item[key];
        });

        setSignupObj(filtered);
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
                            <FieldSignup
                                dataInput={item}
                                setForm={setForm}
                                form={form}
                                />
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