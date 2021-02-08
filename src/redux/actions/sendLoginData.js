import axios from 'axios';
import {checkError} from '../actions/actions';

export const sendLoginData = (payload) => async (dispatch) => {
  await axios.post('http://localhost:3002/login', payload)
    .then(response => {
      if(response.data.errorLogin) {
          dispatch(checkError(response.data.errorLogin));
      }
      if(response.data.checkUser) {
          dispatch({
          type:'CHECKED_USER',
          payload,
        });  
      }
    });
}