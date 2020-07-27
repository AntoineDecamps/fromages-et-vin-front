import React from 'react';
import PropTypes from 'prop-types';

import Nav from 'src/components/Nav';
import Connexion from 'src/components/Connexion';

import './styles.scss';

const MainHeader = () => (
  <div className="mainHeader">
    <img src="" alt="" className="mainHeader__image" />
    <Connexion />
    <Nav />
  </div>
);

MainHeader.propTypes = {};

export default MainHeader;
