/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';
import fromage from './meule-small.jpg';

const Product = ({ name, picture }) => {
  console.log('card product');

  return (
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
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

export default Product;
