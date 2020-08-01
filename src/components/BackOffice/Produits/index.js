import React from 'react';

import Products from 'src/components/List/Products';

import PropTypes from 'prop-types';

import './styles.scss';

const Produits = () => (
  <div className="produits">
    <div className="produits__flexButton">
      <button type="button" className="produits__button">
        Ajouter un fromage
      </button>
    </div>
    <h2 className="produits__title">Liste des fromages en ligne</h2>
  </div>
);

Produits.propTypes = {};

export default Produits;
