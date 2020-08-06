/* eslint-disable no-console */
import { connect } from 'react-redux';

import MainHeader from 'src/components/HomePage/MainHeader';
import { logout } from 'src/actions/user';

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  handleLogout: () => {
    console.log('je veux me déconneter');
    dispatch(logout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MainHeader);
