import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import 'animate.css/animate.css';

import Connexion from 'src/components/Connexion';

import './styles.scss';
import logo from 'src/assets/images/logo-grey.png';

const MainHeader = ({ isLogged, handleLogout }) => (
  <div className="mainHeader">
    <div className="mainHeader__container">
      {!isLogged && (
        <div className="mainHeader__connexion">
          <Connexion />
        </div>
      )}
      {isLogged && (
        <div className="mainHeader__connexion">
          <button type="button" onClick={handleLogout}>Déconnexion</button>
        </div>
      )}
      <img src={logo} alt="" className="mainHeader__logoImage animate__animated animate__slideInDown" />
      <nav className="mainHeader__nav animate__animated animate__slideInRight">
        <NavLink
          to="/"
          className="mainHeader__link mainHeader__link--active"
          activeClassName="menu__link--active"
          exact
        >
          Accueil
        </NavLink>
        <NavLink
          to="/vins"
          className="mainHeader__link wine"
          exact
        >
          Vins
        </NavLink>
        <NavLink
          to="/fromages"
          className="mainHeader__link cheese"
          exact
        >
          Fromages
        </NavLink>
        {/* <NavLink
          to="/contacts"
          className="mainHeader__link"
          exact
        >
          Contacts
        </NavLink> */}
      </nav>
    </div>
  </div>
);

MainHeader.propTypes = {
  isLogged: PropTypes.bool,
  handleLogout: PropTypes.func.isRequired,
};

MainHeader.defaultProps = {
  isLogged: false,
};

export default MainHeader;
