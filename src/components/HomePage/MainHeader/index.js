import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const MainHeader = () => (
  <div className="mainHeader">
    <img src="" alt="" className="mainHeader__image" />
    <button type="button" className="mainHeader__button">Connexion</button>
    <nav className="mainHeader__nav">
      <li className="mainHeader__navItems">Accueil</li>
      <li className="mainHeader__navItems">Vins</li>
      <li className="mainHeader__navItems">Fromages</li>
      <li className="mainHeader__navItems">Contacts</li>
    </nav>
  </div>
);

MainHeader.propTypes = {};

export default MainHeader;
