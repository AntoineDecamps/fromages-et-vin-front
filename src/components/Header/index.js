import React from 'react';
import PropTypes from 'prop-types';

import Nav from 'src/components/Nav';

import './styles.scss';

const Header = () => (
  <div className="header">
    Header
    <Nav />
  </div>
);

Header.propTypes = {};

export default Header;
