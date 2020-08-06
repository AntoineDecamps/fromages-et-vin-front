import React from 'react';
// import PropTypes from 'prop-types';

import Header from 'src/components/Header';
import Form from 'src/containers/Form';
import Footer from 'src/containers/Footer';

import './styles.scss';

const LoginForm = () => (
  <div className="loginForm">
    <Header />
    <Form />
    <Footer />
  </div>
);

// LoginForm.propTypes = {};

export default LoginForm;
