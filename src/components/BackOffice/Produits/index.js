import React from 'react';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getSlugFromName } from 'src/selectors';
import './styles.scss';

const Produits = ({ products, name, url }) => {
  const tableInformation = products.map((product) => (
    <tr>
      <td>{product.name}</td>
      <td>{product.id}</td>
      <td>{product.description}</td>
      <td>
        <Link exact to={`/admin/${url}/${getSlugFromName(product.name)}`}>
          <button type="button" className="produits__button">Modifier</button>
        </Link>
      </td>
    </tr>
  ));
  return (
    <div className="produits">
      <div className="produits__flexButton">
        <Link to={`/admin/ajouter-${url}`}>
          <button type="button" className="produits__button">
            {`Ajouter un ${url}`}
          </button>
        </Link>
      </div>
      <h2 className="produits__title">{`Liste des ${name} en ligne`}</h2>
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
