import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { Modal, Image, Button } from 'semantic-ui-react';
import DeleteModal from 'src/containers/DeleteModal';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { redirectToWines } from 'src/selectors';

import './styles.scss';

const ModalWine = ({
  open,
  openModal,
  closeModal,
  edit,
  openEdit,
  closeEdit,
  name,
  description,
  appellation,
  picture,
  id,
}) => {
  const formik = useFormik({
    initialValues: {
      name,
      appellation,
      image: picture,
      description,
      type: '',
    },
    onSubmit: (values) => {
      axios.put(`http://54.152.134.184/fromages-et-vin/Cheese-and-Wine/public/api/back/wine/edit/${id}`, {
        name: values.name,
        type: values.type,
        appellation: values.appellation,
        picture: values.image,
        description: values.description,
      })
        .then((response) => {
          console.log(response);
        })
        .then(() => {
          redirectToWines();
        })
        .catch((error) => {
          console.log(error);
        });
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
        <Modal.Content image>
          <Image size="medium" rounded src={picture} verticalAlign="middle" wrapped />
          <Modal.Description>
            {!edit && (
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
                    <th className="modal__title">Appellation</th>
                    <td className="modal__content">{appellation}</td>
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
            )}
            {edit && (
              <div className="editWine">
                <h1 className="editWine__title">Modifier {name}</h1>
                <form className="edit__form" onSubmit={formik.handleSubmit}>
                  <label htmlFor="name" className="edit__label">Nom
                    <input type="text" id="name" name="name" className="edit__input" onChange={formik.handleChange} value={formik.values.name} />
                  </label>
                  <label htmlFor="description" className="edit__label">Type
                    <input type="text" id="type" name="type" className="edit__input" onChange={formik.handleChange} value={formik.values.type} />
                  </label>
                  <label htmlFor="appellation" className="edit__label">appellation
                    <input type="text" placeholder="L'appellation du vin" id="appellation" name="appellation" className="edit__input" onChange={formik.handleChange} value={formik.values.appellation} />
                  </label>
                  <label htmlFor="image" className="edit__label">Image
                    <input type="text" placeholder="Veuillez entrer une URL" id="image" name="image" className="edit__input" onChange={formik.handleChange} value={formik.values.image} />
                  </label>
                  <label htmlFor="description" className="edit__label">Description
                    <input type="text" id="description" name="description" className="edit__input__description" onChange={formik.handleChange} value={formik.values.description} />
                  </label>

                  <button type="submit" className="edit__button">Envoyer</button>
                </form>
              </div>
            )}
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color="red">
            <DeleteModal
              id={id}
              apiURL="wine"
              redirect="vins"
            />
          </Button>
          <Button color="yellow" onClick={() => openEdit()}>Modifier</Button>
          <Button color="green">
            <Link to="/admin/vins" onClick={() => closeEdit()}>
              Retour liste des vins
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

ModalWine.propTypes = {
  open: PropTypes.bool.isRequired,
  openModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  edit: PropTypes.bool.isRequired,
  openEdit: PropTypes.func.isRequired,
  closeEdit: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  appellation: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default ModalWine;
