/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';

import Field from './Field';

import avatar from './avatar-alt.png';

import './styles.scss';

const Form = ({
  username,
  password,
  changeField,
  handleLogin,
}) => {
  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log('submit login ok (component)');
    handleLogin();
  };

  return (
    <div className="form">
      <h3 className="form__title">Connectez-vous !</h3>
      <img src={avatar} alt="Avatar" className="form__avatar" />
      <form className="form__input" onSubmit={handleOnSubmit}>
        <Field
          type="text"
          name="username"
          value={username}
          placeholder="Email"
          onChange={changeField}
        />
        <Field
          type="text"
          name="password"
          value={password}
          placeholder="Mot de passe"
          onChange={changeField}
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
};

Form.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
};

export default Form;
