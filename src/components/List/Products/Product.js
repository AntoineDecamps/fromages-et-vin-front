/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Product = ({ name, picture }) => (
  <div className="product">
    <article className="card">
      <a href="#" className="card__link">
        <img src={picture} alt={name} className="card__img" />
        <h3 className="card__title">
          {name}
        </h3>
      </a>
    </article>
  </div>
);

Product.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

export default Product;
