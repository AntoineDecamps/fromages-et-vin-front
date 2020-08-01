import React from 'react';
import PropTypes from 'prop-types';
import logo from './logo.png';

import { Link } from 'react-router-dom';

import './styles.scss';

const Footer = () => (
  <div className="footer">
    <div className="footer__grid">
      <div className="footer__div">
        <h2 className="footer__div__title">Les vins</h2>
        <p className="footer__div__content">Nos suggestions</p>
      </div>
      <img src={logo} alt="Logo" className="footer__logo" />
      <div className="footer__div">
        <h2 className="footer__div__title">Les fromages</h2>
        <p className="footer__div__content">Nos suggestions</p>
      </div>
    </div>
    <div className="footer__information">
      <p className="footer__information__content">L'abus d'alcool est dangereux pour la santé</p>
      <p className="footer__information__content">&copy; 2020 Cheese&Wine</p>
    </div>
    <Link exact to="/admin">
      <button type="button" className="footer__button">
        BackOffice
      </button>
    </Link>
  </div>
);

Footer.propTypes = {};

export default Footer;
