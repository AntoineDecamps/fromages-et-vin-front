/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { getSlugFromName } from 'src/selectors';
import './styles.scss';

const Product = ({ name, picture }) => (
  <div className="product">
    <article className="card">
      <Link className="card__link" exact to={`/produit/${getSlugFromName(name)}`}>
        <img src={picture} alt={name} className="card__img" />
        <h3 className="card__title">
          {name}
        </h3>
      </Link>
    </article>
  </div>
);

Product.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

export default Product;
