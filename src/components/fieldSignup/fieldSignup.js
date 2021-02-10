import React from 'react';
import {useSelector} from 'react-redux';

const FieldSignUp = ({dataInput, setForm}) => {
    const {requestDataSignup} = useSelector(state=>state);
    return (
        <div className="row">
            <label htmlFor={dataInput.for}>{dataInput.value}</label>
            {requestDataSignup && <div className="signupErr">{requestDataSignup[dataInput.for]}</div>}
            <input
                type={dataInput.type}
                placeholder={dataInput.placeholder}
                id={dataInput.for}
                className="signup"
                onChange = {(e) =>{
                    setForm(form => [...form, {[dataInput.for]: e.target.value}])
                }}
                />
        </div>
    )
}

export default FieldSignUp;