export const changeInput = (inputValue, axios) => async (dispatch) => {
  dispatch({
    type: 'CHANGE_INPUT_VALUE',
    inputValue,
  });

  const filterPosts = await axios.get(`http://localhost:3002/search?inputValue=${inputValue}`)
    .then(res => res.data);

  dispatch({
    type: 'FILTER_POSTS_COMPLETED',
    filterPosts,
  });
};

