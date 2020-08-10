/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import 'animate.css/animate.css';

import Connexion from 'src/components/Connexion';
// import onMouseOver from 'src/selectors/mainheader';

import './styles.scss';
import logo from 'src/assets/images/logo-grey.png';
import cheeses from './cheeses-medium.jpg';
import wines from './bottles-medium.jpg';
import main from './glass-plate-medium.jpg';

const MainHeader = ({ isLogged, handleLogout, pseudo }) => {
  const onMouseOver = (event) => {
    console.log(event.target);
    const navFocused = event.target;
    const header = document.querySelector('.mainHeader');
    console.log(header);

    if (navFocused.classList.contains('cheese')) {
      header.style.backgroundImage = `url(${cheeses})`;
      header.style.transition = '0.3s';
    }
    else if (navFocused.classList.contains('wine')) {
      header.style.backgroundImage = `url(${wines})`;
      header.style.transition = '0.3s';
    }
    else {
      header.style.backgroundImage = `url(${main})`;
      header.style.transition = '0.3s';
    }
  };

  return (
    <div className="mainHeader">
      <div className="mainHeader__container">
        {!isLogged && (
          <div className="mainHeader__connexion">
            <Connexion />
          </div>
        )}
        {isLogged && (
          <div className="mainHeader__connexion">
            <button
              type="button"
              onClick={handleLogout}
              className="connexion__button"
            >
              {`${pseudo} - Déconnexion`}
            </button>
          </div>
        )}
        <img src={logo} alt="" className="mainHeader__logoImage animate__animated animate__slideInDown" />
        <nav className="mainHeader__nav animate__animated animate__slideInRight">
          <NavLink
            to="/"
            className="mainHeader__link mainHeader__link--active"
            activeClassName="menu__link--active"
            exact
            onMouseOver={onMouseOver}
          >
            Accueil
          </NavLink>
          <NavLink
            to="/vins"
            className="mainHeader__link wine"
            exact
            onMouseOver={onMouseOver}
          >
            Vins
          </NavLink>
          <NavLink
            to="/fromages"
            className="mainHeader__link cheese"
            exact
            onMouseOver={onMouseOver}
          >
            Fromages
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

MainHeader.propTypes = {
  isLogged: PropTypes.bool,
  handleLogout: PropTypes.func.isRequired,
  pseudo: PropTypes.string,
};

MainHeader.defaultProps = {
  isLogged: false,
  pseudo: '',
};

export default MainHeader;
