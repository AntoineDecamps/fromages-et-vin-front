import React from 'react';

import { Header, Modal, Image, Button } from 'semantic-ui-react';

import PropTypes from 'prop-types';
import './styles.scss';

const Produits = ({ wines, cheeses, open, openModal, closeModal }) => {
  const modalInformation = (cheese) => (
    <>
      <Modal.Header>{cheese.name}</Modal.Header>
      <Modal.Content image>
        <Image size="medium" src={cheese.picture} wrapped />
        <Modal.Description>
          <h1>Infos du produit</h1>
          <p>Nom</p>
          <p>Id</p>
          <p>description</p>
        </Modal.Description>
      </Modal.Content>
    </>
  );
  const tableInformation = cheeses.map((cheese) => (
    <tr>
      <td>{cheese.name}</td>
      <td>{cheese.id}</td>
      <td>{cheese.description}</td>
      <td>
        <Modal
          onClose={() => closeModal()}
          onOpen={() => openModal()}
          open={open}
          trigger={(
            <button type="button" className="produits__table__button">
              modifier
            </button>
            )}
        >
          {modalInformation(cheese)}
          <Modal.Actions>
            <Button color="yellow">Editer</Button>
            <Button color="red">Supprimer</Button>
            <Button
              content="OK"
              labelPosition="right"
              icon="checkmark"
              onClick={() => closeModal()}
              positive
            />
          </Modal.Actions>
        </Modal>
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
