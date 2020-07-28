/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';
import fromage from './meule-small.jpg';

const Product = ({ title }) => {
  console.log('card product');

  return (
    <div className="product">
      <article className="card">
        <a href="#" className="card__link">
          <img src={fromage} alt={title} className="card__img" />
          <h3 className="card__title">
            {title}
          </h3>
        </a>
      </article>
    </div>
  );
};

Product.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Product;
