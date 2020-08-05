import React from 'react';
import { useFormik } from 'formik';
import { Header, Modal, Image, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './styles.scss';

const ModalPage = ({
  open,
  openModal,
  closeModal,
  edit,
  openEdit,
  closeEdit,
  name,
  description,
  picture,
  id,
}) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      milk: '',
      image: '',
      description: '',
    },
  });
  return (
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
            {edit && (
            <div className="addCheese">
              <h1 className="addCheese__title">Ajouter un fromage</h1>
              <form className="add__form">
                <label htmlFor="name" className="add__label">Nom
                  <input type="text" placeholder="Le nom du fromage" id="name" name="name" className="add__input" onChange={formik.handleChange} value={formik.values.name} />
                </label>
                <label htmlFor="milk" className="add__label">Lait
                  <input type="text" placeholder="Le lait duquel provient le fromage" id="milk" name="milk" className="add__input" onChange={formik.handleChange} value={formik.values.milk} />
                </label>
                <label htmlFor="image" className="add__label">Image
                  <input type="text" placeholder="Veuillez entrer une URL" id="image" name="image" className="add__input" onChange={formik.handleChange} value={formik.values.image} />
                </label>
                <label htmlFor="description" className="add__label">Description
                  <input type="text" id="description" name="description" className="add__input__description" onChange={formik.handleChange} value={formik.values.description} />
                </label>
                <button type="button" className="add__button">Envoyer</button>
              </form>
            </div>
            )}
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color="yellow" onClick={() => openEdit()}>Modifier</Button>
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
};

ModalPage.propTypes = {};

export default ModalPage;
