import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';

import './styles.scss';

const SideBar = () => (
  <div className="sideBar">
    <div className="sideBar__top">
      <Icon circular inverted name="users" />
      <p className="sideBar__text">Bonjour petit Aigle !</p>
      <button type="button" className="sideBar__button">Se déconnecter</button>
    </div>
    <div className="sideBar__nav">
      <li className="sideBar__nav__link">Accueil</li>
      <li className="sideBar__nav__link">Fromages</li>
      <li className="sideBar__nav__link">Vins</li>
      <li className="sideBar__nav__link">Gestion des utilisateurs</li>
    </div>
  </div>
);

SideBar.propTypes = {};

export default SideBar;
