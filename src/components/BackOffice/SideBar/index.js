import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

import './styles.scss';

const SideBar = ({ handleLogout, pseudo }) => (
  <div className="sideBar">
    <div className="sideBar__top">
      <div className="sideBar__top__icon">
        <Icon circular inverted name="users" />
      </div>
      <div className="sideBar__top__information">
        <p className="sideBar__text">{`Bonjour ${pseudo} !`}</p>
        <button
          type="button"
          className="sideBar__button"
          onClick={handleLogout}
        >
          Se déconnecter
        </button>
      </div>
    </div>
    <div className="sideBar__nav">
      <NavLink exact to="/admin">
        <li className="sideBar__nav__link">Accueil</li>
      </NavLink>
      <NavLink exact to="/admin/fromages">
        <li className="sideBar__nav__link">Fromages</li>
      </NavLink>
      <NavLink exact to="/admin/vins">
        <li className="sideBar__nav__link">Vins</li>
      </NavLink>
      <NavLink exact to="/admin/utilisateurs">
        <li className="sideBar__nav__link">Gestion des utilisateurs</li>
      </NavLink>
    </div>
  </div>
);

SideBar.propTypes = {
  handleLogout: PropTypes.func.isRequired,
  pseudo: PropTypes.string,
};

SideBar.defaultProps = {
  pseudo: '',
};

export default SideBar;
