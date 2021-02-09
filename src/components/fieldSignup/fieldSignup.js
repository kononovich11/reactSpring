import React from 'react';
import {useSelector} from 'react-redux';

const FieldSignUp = ({dataInput}) => {
    const {requestDataSignup} = useSelector(state=>state);
    console.log(requestDataSignup);
    return (
        <div className="row">
            <label for={dataInput.for}>{dataInput.value}</label>
            {requestDataSignup && <div className="signupErr">{requestDataSignup.firstName}</div>}
            <input type={dataInput.type} placeholder={dataInput.placeholder} id={dataInput.for} className="signup" />
        </div>
    )
}

export default FieldSignUp;