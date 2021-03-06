/* eslint-disable no-console */
import axios from 'axios';
import { GET_CHEESES, saveCheeses } from 'src/actions/cheese';

const cheese = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_CHEESES:
      axios.get('http://192.168.56.101/wine-and-cheese/fromages-et-vin/Cheese-and-Wine/public/api/cheeses/')
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
