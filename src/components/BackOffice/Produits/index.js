import React from 'react';

import Products from 'src/components/List/Products';

import PropTypes from 'prop-types';

import './styles.scss';

const Produits = ({ wines, cheeses }) => {
  console.log(cheeses);
  const tableInformation = cheeses.map((cheese) => (
    <tr>
      <td>{cheese.name}</td>
      <td>{cheese.id}</td>
      <td>{cheese.description}</td>
      <td>
        <button type="button" className="produits__table__button">
          modifier
        </button>
      </td>
    </tr>
  ));
  return (
    <div className="produits">
      <div className="produits__flexButton">
        <button type="button" className="produits__button">
          Ajouter un fromage
        </button>
      </div>
      <h2 className="produits__title">Liste des fromages en ligne</h2>
      <table className="produits__table">
        <tr>
          <th>Nom</th>
          <th>ID</th>
          <th>Description</th>
          <th>Modification</th>
        </tr>
        {tableInformation}
      </table>
    </div>
  );
};

Produits.propTypes = {};

export default Produits;
