import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Connexion from 'src/components/Connexion';

import './styles.scss';
import mainImage from 'src/assets/images/glass-plate-small.jpg';
import logo from 'src/assets/images/logo.png';

const MainHeader = () => (
  <div className="mainHeader">
    <img src={mainImage} alt="" className="mainHeader__image" />
    <div className="mainHeader__logo">
      <img src={logo} alt="" className="mainHeader__logoImage" />
    </div>
    <Connexion />
    <nav className="mainHeader__nav">
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
