import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import 'animate.css/animate.css';

import Connexion from 'src/components/Connexion';

import './styles.scss';
import logo from 'src/assets/images/logo.png';

const MainHeader = () => (
  <div className="mainHeader">
    <div className="mainHeader__connexion">
      <Connexion />
    </div>
    <div className="mainHeader__logo animate__animated animate__slideInDown">
      <img src={logo} alt="" className="mainHeader__logoImage" />
    </div>
    <nav className="mainHeader__nav animate__animated animate__slideInRight">
      <Link
        to="/"
        className="mainHeader__link"
        exact
      >
        Accueil
      </Link>
      <Link
        to="/vins"
        className="mainHeader__link"
        exact
      >
        Vins
      </Link>
      <Link
        to="/fromages"
        className="mainHeader__link"
        exact
      >
        Fromages
      </Link>
      <Link
        to="/contacts"
        className="mainHeader__link"
        exact
      >
        Contacts
      </Link>
    </nav>
  </div>
);

MainHeader.propTypes = {};

export default MainHeader;
