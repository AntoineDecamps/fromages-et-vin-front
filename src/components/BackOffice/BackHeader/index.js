import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const BackHeader = () => (
  <div className="backHeader">
    <h1 className="backHeader__title">Cheese & Wine</h1>
    <h2 className="backHeader__secondTitle">Back-office</h2>
  </div>
);

BackHeader.propTypes = {};

export default BackHeader;
