import React from 'react';

import { Header, Modal, Image, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './styles.scss';

const ModalPage = ({ open, openModal, closeModal, name, description, picture, id }) => (
  <div className="modalPage">
    <Modal
      open={!open}
      onClose={() => closeModal()}
      onOpen={() => openModal()}
      trigger={<Button>{name}</Button>}
    >
      <Modal.Header>
        {name}
      </Modal.Header>
      <Modal.Content image scrolling>
        <Image size="medium" src={picture} wrapped />
        <Modal.Description>
          <div className="modal">
            <table className="modal__table">
              <tr>
                <th className="modal__title">Nom</th>
                <td className="modal__content">{name}</td>
              </tr>
              <tr>
                <th className="modal__title">ID</th>
                <td className="modal__content">{id}</td>
              </tr>
              <tr>
                <th className="modal__title">Description</th>
                <td className="modal__content">{description}</td>
              </tr>
              <tr>
                <th className="modal__title">Image</th>
                <td className="modal__content">{picture}</td>
              </tr>
            </table>
          </div>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="yellow">Modifier</Button>
        <Button color="red">Supprimer</Button>
        <Button color="green">
          <Link to="/admin/fromages">
            Retour liste des fromages
          </Link>
        </Button>
        {/* <Button onClick={() => closeModal()} primary>
          Proceed <Icon name="chevron right" />
        </Button> */}
      </Modal.Actions>
    </Modal>
  </div>
);

Modal.propTypes = {};

export default ModalPage;
