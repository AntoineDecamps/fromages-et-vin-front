/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import Field from './Field';
import NoPassword from './NoPassword';

import avatar from './avatar-alt.png';

import './styles.scss';

const Form = ({
  username,
  password,
  pseudo,
  changeField,
  handleLogin,
  handleLogout,
  isLogged,
  error,
}) => {
  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log('SUBMIT', event.target);
    handleLogin();
  };

  console.log('FORM', localStorage);
  console.log(pseudo);

  if (!isLogged) {
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
            type="password"
            name="password"
            value={password}
            placeholder="Mot de passe"
            onChange={changeField}
          />
          {error && (
            <p className="form__error">L'identifiant ou le mot de passe ne correpondent pas. Veuillez réessayer.</p>
          )}
          <button
            type="submit"
            className="form__button"
          >
            Se connecter
          </button>
        </form>
        <NoPassword />
      </div>
    );
  }
  return (
    <div className="form">
      <button
        type="submit"
        className="form__button"
        onClick={handleLogout}
      >
        {`${pseudo} - Déconnexion`}
      </button>
    </div>
  );
};

Form.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  pseudo: PropTypes.string,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
  isLogged: PropTypes.bool,
  error: PropTypes.string,
};

Form.defaultProps = {
  isLogged: false,
  pseudo: '',
  error: '',
};

export default Form;
