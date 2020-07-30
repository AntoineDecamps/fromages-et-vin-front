import { connect } from 'react-redux';
import { getCheeses } from 'src/actions/cheese';

import App from 'src/components/App';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  getCheeses: () => dispatch(getCheeses()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
