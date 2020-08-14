import { connect } from 'react-redux';
import { getCheeses } from 'src/actions/cheese';
import { getWines } from 'src/actions/wine';
import { getProposals } from 'src/actions/proposals';
import { checkIsLogged, getUsers } from 'src/actions/user';

import App from 'src/components/App';

const mapStateToProps = (state) => ({
  cheeses: state.cheeses.cheesesList,
  wines: state.wines.winesList,
  cheeseLoading: state.cheeses.cheeseLoading,
  wineLoading: state.wines.wineLoading,
});

const mapDispatchToProps = (dispatch) => ({
  getCheeses: () => dispatch(getCheeses()),
  getWines: () => dispatch(getWines()),
  getUsers: () => dispatch(getUsers()),
  checkIsLogged: () => dispatch(checkIsLogged()),
  getProposals: () => dispatch(getProposals()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
