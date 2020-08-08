import React from 'react';
import PropTypes from 'prop-types';

import Product from './Product';

import './styles.scss';

const Products = ({ productList, redirectURL }) => {
  const Card = productList.map(({ name, picture, id }) => (
    <Product
      key={id}
      name={name}
      picture={picture}
      redirectURL={redirectURL}
    />
  ));
  return (
    <div className="products">
      {Card}
    </div>
  );
};

Products.propTypes = {
  redirectURL: PropTypes.string.isRequired,
  productList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Products;
