/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Title = ({ name }) => (
  <h2 className="title">Nos {name}</h2>
);

Title.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Title;
