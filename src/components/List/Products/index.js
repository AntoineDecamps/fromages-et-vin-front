/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';

import Product from './Product';

import cheeses from '../data';

import './styles.scss';

const Products = () => {
  const cheeseCard = cheeses.map(({ name }) => <Product key={name} name={name} />);
  // console.log(cheeseCard);

  return (
    <div className="products">
      {cheeseCard}
    </div>
  );
};

Products.propTypes = {};

export default Products;
