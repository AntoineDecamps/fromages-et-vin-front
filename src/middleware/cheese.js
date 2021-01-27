/* eslint-disable no-console */
import axios from 'axios';
import { GET_CHEESES, saveCheeses } from 'src/actions/cheese';

const cheese = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_CHEESES:
      axios.get('http://34.226.136.30/api/api/cheeses/')
        .then((response) => {
          // console.log(response);
          store.dispatch(saveCheeses(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    default:
      next(action);
      break;
  }
};

export default cheese;
