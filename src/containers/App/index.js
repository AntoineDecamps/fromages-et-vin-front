import { connect } from 'react-redux';
import { getCheeses } from 'src/actions/cheese';
import { getWines } from 'src/actions/wine';
import { checkIsLogged } from 'src/actions/user';

import App from 'src/components/App';
import { getUsers } from '../../actions/user';

const mapStateToProps = (state) => ({
  cheeses: state.cheeses.cheesesList,
  wines: state.wines.winesList,
});

const mapDispatchToProps = (dispatch) => ({
  getCheeses: () => dispatch(getCheeses()),
  getWines: () => dispatch(getWines()),
  getUsers: () => dispatch(getUsers()),
  checkIsLogged: () => dispatch(checkIsLogged()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
