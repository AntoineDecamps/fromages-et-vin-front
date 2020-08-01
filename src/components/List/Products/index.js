import React from 'react';
import PropTypes from 'prop-types';

import Product from './Product';

import './styles.scss';

const Products = ({ productList }) => {
  const Card = productList.map(({ name, picture, id }) => (
    <Product
      key={id}
      name={name}
      picture={picture}
    />
  ));
  return (
    <div className="products">
      {Card}
    </div>
  );
};

Products.propTypes = {
  productList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Products;
