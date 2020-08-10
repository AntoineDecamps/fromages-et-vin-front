import React from 'react';
import {
  Button,
  Image,
  Modal,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

import './styles.scss';

const AddProposal = ({
  open,
  openModal,
  closeModal,
  name,
  image,
  product,
  propositions,
}) => {
  const selectList = propositions.map((proposition) => (
    <option
      value={proposition.name}
      key={proposition.name}
    >
      {proposition.name}
    </option>
  ));
  return (
    <div className="addProposal">
      <Modal
        onClose={() => closeModal()}
        onOpen={() => openModal()}
        open={open}
        trigger={<Button color="yellow">Faire une proposition</Button>}
      >
        <Modal.Header>Proposez une association</Modal.Header>
        <Modal.Content image>
          <Image size="medium" src={image} wrapped />
          <Modal.Description>
            <form className="addProposal__form" action="">
              <label className="addProposal__label" htmlFor="name"> Quel est votre prénom ?
                <input type="text" name="name" />
              </label>
              <label htmlFor="association" className="addProposal__label">
                {`Quel ${product} souhaitez-vous proposer avec le ${name} ?`}
                <select className="addProposal__select" name="association" id="">{selectList}</select>
              </label>
            </form>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color="red" onClick={() => closeModal()}>
            Annuler
          </Button>
          <Button
            content="Valider"
            labelPosition="right"
            icon="checkmark"
            onClick={() => closeModal()}
            positive
          />
        </Modal.Actions>
      </Modal>
    </div>
  );
};

AddProposal.propTypes = {
  open: PropTypes.bool.isRequired,
  openModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  product: PropTypes.string.isRequired,
  propositions: PropTypes.array.isRequired,
};

export default AddProposal;
