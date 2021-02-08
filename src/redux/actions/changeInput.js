import axios from 'axios';

export const changeInput = (inputValue) => async (dispatch) => {
  console.log(inputValue);
  dispatch({
    type: 'CHANGE_INPUT_VALUE',
    inputValue,
  });

  const filterPosts = await axios.get(`http://localhost:3002/home?inputValue=${inputValue}`)
    .then(res => {
      console.log(res);
      return res.data});

  dispatch({
    type: 'FILTER_POSTS_COMPLETED',
    filterPosts,
  });
};

