import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles.scss';

const Nav = () => (
  <nav className="menu">
    <NavLink
      to="/"
      className="menu__link"
      activeClassName="menu__link--active"
      exact
    >
      Accueil
    </NavLink>
    <NavLink
      to="/fromages"
      className="menu__link"
      activeClassName="menu__link--active"
      exact
    >
      Fromages
    </NavLink>
    <NavLink
      to="/vins"
      className="menu__link"
      activeClassName="menu__link--active"
      exact
    >
      Vins
    </NavLink>
  </nav>
);

export default Nav;
