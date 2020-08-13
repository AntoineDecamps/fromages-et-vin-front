import axios from 'axios';
import { GET_CHEESES, saveCheeses } from 'src/actions/cheese';

const cheese = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_CHEESES:
      axios.get('http://54.152.134.184/fromages-et-vin/Cheese-and-Wine/public/api/cheeses/', {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      })
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
