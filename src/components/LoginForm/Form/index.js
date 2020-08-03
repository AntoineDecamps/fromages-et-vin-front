import React from 'react';
import PropTypes from 'prop-types';

import avatar from './avatar-alt.png'

import './styles.scss';

const Form = () => (
  <div className="form">
    <h3 className="form__title">Connectez-vous !</h3>
    <img src={avatar} alt="Avatar" className="form__avatar" />
    <form className="form__input">
      <input
        type="text"
        className="form__input--email"
        placeholder="Email"
      />
      <input
        type="text"
        className="form__input--password"
        placeholder="Mot de passe"
      />
      <button
        type="submit"
        className="form__button"
      >
        Se connecter
      </button>
    </form>
  </div>
);

Form.propTypes = {};

export default Form;
