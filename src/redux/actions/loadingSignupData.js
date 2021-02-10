import axios from 'axios';
import {successAdding} from '../actions/actions';

export const loadingSignupData = (payload) => async (dispatch) => {
  const requestSignup = await axios.post('http://localhost:3002/signup',payload)
  .then(response => {
    const errRegUser = response.data.errorUser;
    if(errRegUser?.length) {
      dispatch({
        type: 'REGISTRATED_USER_ERROR',
        errRegUser,
      })
    }
    const errors = response.data.errors;
    let objErrors = {};

    errors?.forEach(item => {
      Object.assign(objErrors, {[item.path]: item.message});
    });

    if(response.data.success?.length) {
      dispatch(successAdding(response.data.success));
    }
    dispatch({
      type:'SEND_SIGNUP_DATA',
      objErrors,
    });

  }).catch(err => {
      console.log(err);
 });
}