import React from 'react';
import PropTypes from 'prop-types';
import 'animate.css/animate.css';

import './styles.scss';

const Description = ({ description }) => (
  <div className="productDescription">
    <p className="productDescription__content animate__animated animate__slideInRight">{description}
    </p>
  </div>
);

Description.propTypes = {
  description: PropTypes.string.isRequired,
};

export default Description;
