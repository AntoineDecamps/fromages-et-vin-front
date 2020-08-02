/* eslint-disable no-console */
import { connect } from 'react-redux';

import Form from 'src/components/LoginForm/Form';
import { changeField, login } from 'src/actions/user';

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    console.log(value, name);
    dispatch(changeField(value, name));
  },
  handleLogin: () => {
    console.log('je veux me connecter');
    dispatch(login());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Form);
