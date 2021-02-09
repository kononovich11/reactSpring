import React from 'react';
import {useSelector} from 'react-redux';

const FieldSignUp = ({dataInput}) => {
    const {requestDataSignup} = useSelector(state=>state);
    return (
        <div className="row">
            <label htmlFor={dataInput.for}>{dataInput.value}</label>
            {requestDataSignup && <div className="signupErr">{requestDataSignup[dataInput.for]}</div>}
            <input type={dataInput.type} placeholder={dataInput.placeholder} id={dataInput.for} className="signup" />
        </div>
    )
}

export default FieldSignUp;