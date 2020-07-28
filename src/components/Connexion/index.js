import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './styles.scss';

const Connexion = () => (
  <div className="connexion">
    <button type="button" className="connexion__button">
      <NavLink
        to="/connexion"
        className="connexion__link"
        exact
      >
        Connexion
      </NavLink>
    </button>
  </div>
);

Connexion.propTypes = {};

export default Connexion;
