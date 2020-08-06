import { connect } from 'react-redux';

import SideBar from 'src/components/BackOffice/SideBar';
import { logout } from 'src/actions/user';

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
});

const mapDispatchToProps = (dispacth) => ({
  handleLogout: () => {
    dispacth(logout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
