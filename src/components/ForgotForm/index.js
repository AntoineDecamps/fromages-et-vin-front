/* eslint-disable no-console */
import React from 'react';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
// import PropTypes from 'prop-types';

import './styles.scss';

const ForgotForm = ({}) => {

  console.log('Forgot FORM');

  return (
    <div className="loginForm">
        <Header />
            <div className="form">
                <h3 className="form__title">Modifiez votre mot de passe</h3>
            </div>
        <Footer />
  </div>
  );
};

export default ForgotForm;
