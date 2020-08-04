import axios from 'axios';
import { GET_WINES, saveWines } from 'src/actions/wine';

const wine = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_WINES:
      axios.get('http://54.152.134.184/fromages-et-vin/Cheese-and-Wine/public/api/wines/')
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
