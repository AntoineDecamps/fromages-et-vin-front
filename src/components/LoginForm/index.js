import React from 'react';
import PropTypes from 'prop-types';

import Header from 'src/components/Header';
import Form from 'src/components/LoginForm/Form';

import './styles.scss';

const LoginForm = () => (
  <div className="loginForm">
    <Header />
    <img src="" alt="" className="loginFormImage" />
    <Form />
  </div>
);

LoginForm.propTypes = {};

export default LoginForm;
