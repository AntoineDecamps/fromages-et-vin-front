import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';

import logo from './logo.png';

import './styles.scss';

const Footer = ({ isLogged }) => (
  <div className="footer">
    <div className="footer__grid">
      <NavLink
        to="/vins"
        className="footer__div"
        exact
      >
        <h2 className="footer__div__title">Les vins</h2>
        <p className="footer__div__content">Notre liste</p>
      </NavLink>
      <img src={logo} alt="Logo" className="footer__logo" />
      <NavLink
        to="/fromages"
        className="footer__div"
        exact
      >
        <h2 className="footer__div__title">Les fromages</h2>
        <p className="footer__div__content">Notre liste</p>
      </NavLink>
    </div>
    <div className="footer__information">
      <p className="footer__information__content">L'abus d'alcool est dangereux pour la santé</p>
      <p className="footer__information__content">&copy; 2020 Cheese&Wine</p>
    </div>
    {isLogged && (
      <Link exact to="/admin">
        <button type="button" className="footer__button">
          BackOffice
        </button>
      </Link>
    )}
  </div>
);

Footer.propTypes = {
  isLogged: PropTypes.bool,
};

Footer.defaultProps = {
  isLogged: false,
};

export default Footer;
