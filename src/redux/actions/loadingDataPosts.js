import {loadingError} from './actions';
import axios from 'axios';

export const loadingDataPosts = () => async (dispatch) => {

  dispatch({
    type:'DATA_POSTS_LOADING_START',
  });

  const dataPosts = await axios.get('http://localhost:3002')
      .then(res => res.data)
      .catch(err => {
        console.log(err);
        dispatch(loadingError(err));
      });

  dispatch({
      type:'DATA_POSTS_LOADING_COMPLETED',
      dataPosts,
  });

};
