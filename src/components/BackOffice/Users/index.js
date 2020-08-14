import React from 'react';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getSlugFromName } from 'src/selectors';
import './styles.scss';

const Users = ({ users }) => {
  const tableInformation = users.map((user) => (
    <tr>
      <td>{user.email}</td>
      <td>{user.name}</td>
      <td>{user.roles}</td>
      <td>
        <Link exact to={`/admin/utilisateurs/${getSlugFromName(user.name)}`}>
          <button type="button" className="users__button">Modifier</button>
        </Link>
      </td>
    </tr>
  ));
  return (
    <div className="users">
      <div className="users__flexButton">
        <Link to="/admin/ajouter-utilisateur">
          <button type="button" className="users__button">
            Ajouter un utilisateur
          </button>
        </Link>
      </div>
      <h2 className="users__title">Liste des utilisateurs enregistrés</h2>
      <table className="users__table">
        <tr>
          <th>Email</th>
          <th>Nom</th>
          <th>Rôle</th>
          <th>Modifier</th>
        </tr>
        {tableInformation}
      </table>
    </div>
  );
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
};

export default Users;
