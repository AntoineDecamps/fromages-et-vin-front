/* eslint-disable no-console */
import { connect } from 'react-redux';

import Form from 'src/components/LoginForm/Form';
import { changeField, login } from 'src/actions/user';

const mapStateToProps = (state) => ({
  username: state.user.username,
  password: state.user.password,
  name: state.user.name,
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
});
export default connect(mapStateToProps, mapDispatchToProps)(Form);
