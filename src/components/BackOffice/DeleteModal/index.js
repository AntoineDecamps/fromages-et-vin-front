import React from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './styles.scss';

const DeleteModal = ({ open, openDelete, closeDelete, id, apiURL, redirect }) => {
  const handleDelete = () => {
    const token = localStorage.getItem('token');
    axios.delete(`http://54.152.134.184/fromages-et-vin/Cheese-and-Wine/public/api/back/${apiURL}/delete/${id}`, {
      headers: {
        'X-Auth-Token': token,
        'content-type': 'application/json',
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="deleteModal">
      <Modal
        closeIcon
        open={open}
        trigger={<p>Supprimer</p>}
        onClose={() => closeDelete()}
        onOpen={() => openDelete()}
      >
        <Header icon="archive" content="Suppression de la base de donnée" />
        <Modal.Content>
          <p>
            Etes-vous sûr de vouloir supprimer ce produit ?
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button color="red" onClick={() => closeDelete()}>
            <Icon name="remove" /> No
          </Button>
          <Link to={`/admin/${redirect}`}>
            <Button
              color="green"
              onClick={() => {
                handleDelete();
                closeDelete();
              }}
            >
              <Icon name="checkmark" /> Yes
            </Button>
          </Link>
        </Modal.Actions>
      </Modal>
    </div>
  );
};

DeleteModal.propTypes = {};

export default DeleteModal;
