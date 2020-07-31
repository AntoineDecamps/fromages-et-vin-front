import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Title = ({ name }) => (
  <h2 className="title">Nos {name}</h2>
);

Title.propTypes = {};

export default Title;
