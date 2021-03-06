import axios from 'axios';
import { GET_WINES, saveWines } from 'src/actions/wine';

const wine = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_WINES:
      axios.get('http://192.168.56.101/wine-and-cheese/fromages-et-vin/Cheese-and-Wine/public/api/wines/')
        .then((response) => {
          store.dispatch(saveWines(response.data));
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

export default wine;
