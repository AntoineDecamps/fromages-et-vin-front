import React from 'react';
// import PropTypes from 'prop-types';
import 'animate.css/animate.css';

import './styles.scss';

const Description = ({ description }) => (
  <div className="description">
    <p className="description__content animate__animated animate__slideInRight">{description}
    </p>
  </div>
);

Description.propTypes = {};

export default Description;
