/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import Field from './Field';

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
    if (error) {
      console.log(error);
    }
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
  }
  if (error) {
    console.log(error);
    return (
      <div className="form">
        <p>Erreur lors de la connexion</p>
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
