import axios from 'axios';
import { GET_PROPOSALS, saveProposals } from 'src/actions/proposals';

const proposals = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_PROPOSALS:
      axios.get('http://34.203.201.178/fromages-et-vin/Cheese-and-Wine/public/api/userproposal')
        .then((response) => {
          // console.log(response);
          store.dispatch(saveProposals(response.data));
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

export default proposals;
