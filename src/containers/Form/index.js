/* eslint-disable no-console */
import { connect } from 'react-redux';

import Form from 'src/components/LoginForm/Form';
import { changeField, login, logout } from 'src/actions/user';

const mapStateToProps = (state) => ({
  username: state.user.username,
  password: state.user.password,
  isLogged: state.user.isLogged,
  pseudo: state.user.pseudo,
  error: state.user.error,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    // console.log(value, name);
    dispatch(changeField(value, name));
  },
  handleLogin: () => {
    console.log('je veux me connecter (container)');
    dispatch(login());
  },
  handleLogout: () => {
    console.log('je veux me déconnecter');
    dispatch(logout());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Form);
