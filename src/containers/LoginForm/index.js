/* eslint-disable no-console */
import { connect } from 'react-redux';

import Form from 'src/components//LoginForm/Form';
import { changeField } from 'src/actions/user';

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    console.log(value, name);
    dispatch(changeField(value, name));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Form);
