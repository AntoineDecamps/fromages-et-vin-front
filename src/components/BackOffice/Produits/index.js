import React from 'react';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getSlugFromName } from 'src/selectors';
import './styles.scss';

const Produits = ({ wines, cheeses }) => {
  const tableInformation = cheeses.map((cheese) => (
    <tr>
      <td>{cheese.name}</td>
      <td>{cheese.id}</td>
      <td>{cheese.description}</td>
      <td>
        <Link exact to={`/admin/${getSlugFromName(cheese.name)}`}>
          <button type="button" className="produits__button">Modifier</button>
        </Link>
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
