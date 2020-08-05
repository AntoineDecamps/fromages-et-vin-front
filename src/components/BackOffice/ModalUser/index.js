import React from 'react';

import { Header, Modal, Image, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './styles.scss';

const ModalUser = ({ open, openModal, closeModal, name, role, email, id }) => (
  <div className="modalUser">
    <Modal
      open={!open}
      onClose={() => closeModal()}
      onOpen={() => openModal()}
      trigger={<Button>{name}</Button>}
    >
      <Modal.Header>
        {name}
      </Modal.Header>
      <Modal.Content image>
        <Image src="https://lh3.googleusercontent.com/proxy/7Wb8Gef8ZNL_uXJgR-SqLvCsUFn5pi_tz50ghMNn7gvK4b70ixOFIkAQVPfHwUpks6a574FClGWVmPh8QdWDZ6MZHLb0kGzNmGTlLBKM3acskWRuNw-wJQ" size="medium" circular />
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
                <th className="modal__title">rôle</th>
                <td className="modal__content">{role}</td>
              </tr>
              <tr>
                <th className="modal__title">email</th>
                <td className="modal__content">{email}</td>
              </tr>
            </table>
          </div>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="yellow">Modifier</Button>
        <Button color="red">Supprimer</Button>
        <Button color="green">
          <Link to="/admin/utilisateurs">
            Retour liste des utilisateurs
          </Link>
        </Button>
        {/* <Button onClick={() => closeModal()} primary>
          Proceed <Icon name="chevron right" />
        </Button> */}
      </Modal.Actions>
    </Modal>
  </div>
);

ModalUser.propTypes = {};

export default ModalUser;
