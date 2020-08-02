import { connect } from 'react-redux';
import { getCheeses } from 'src/actions/cheese';
import { getWines } from 'src/actions/wine';

import App from 'src/components/App';

const mapStateToProps = (state) => ({
  cheeses: state.cheeses.cheesesList,
  wines: state.wines.winesList,
});

const mapDispatchToProps = (dispatch) => ({
  getCheeses: () => dispatch(getCheeses()),
  getWines: () => dispatch(getWines()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);