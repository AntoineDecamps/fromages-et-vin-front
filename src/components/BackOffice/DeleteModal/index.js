import React from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import './styles.scss';

const DeleteModal = ({ open, openDelete, closeDelete }) => (
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
        <Button color="green" onClick={() => closeDelete()}>
          <Icon name="checkmark" /> Yes
        </Button>
      </Modal.Actions>
    </Modal>
  </div>
);

DeleteModal.propTypes = {};

export default DeleteModal;
