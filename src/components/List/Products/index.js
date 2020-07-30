import React from 'react';
import PropTypes from 'prop-types';

import Product from './Product';

import './styles.scss';

const Products = () => (
  <div className="products">
    <Product title="Tôme des Pyrénées" />
    <Product title="Camembert" />
    <Product title="Comté" />
    <Product title="Reblochon" />
    <Product title="Livarot" />
    <Product title="Pont-l'évêque" />
  </div>
);

Products.propTypes = {};

export default Products;
