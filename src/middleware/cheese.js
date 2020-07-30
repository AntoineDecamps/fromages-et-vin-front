import axios from 'axios';
import { GET_CHEESES } from 'src/actions/cheese';

const cheese = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_CHEESES:
      axios.get('http://localhost/APOTHEOSE/BACK/fromages-et-vin/Cheese-and-Wine/public/api/cheeses')
        .then((response) => {
          console.log(response);
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
