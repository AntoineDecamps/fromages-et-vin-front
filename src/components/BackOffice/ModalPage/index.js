import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { Modal, Image, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { redirectToCheeses } from 'src/selectors';
import DeleteModal from 'src/containers/DeleteModal';
import PropTypes from 'prop-types';

import './styles.scss';

// this component was first initiliased for wines and cheeses but finally it will only be used
// for cheeses as we integreted an edit form in it which is specific to cheeses
// => normaly it should have been called ModalCheese
const ModalPage = ({
  open,
  openModal,
  closeModal,
  edit,
  openEdit,
  closeEdit,
  name,
  description,
  milk,
  picture,
  id,
}) => {
  const formik = useFormik({
    initialValues: {
      name,
      milk,
      image: picture,
      description,
    },
    onSubmit: (values) => {
      axios.put(`http://54.152.134.184/fromages-et-vin/Cheese-and-Wine/public/api/back/cheese/edit/${id}`, {
        name: values.name,
        milk: values.milk,
        picture: values.image,
        description: values.description,
      })
        .then((response) => {
          console.log(response);
        })
        .then(() => {
          redirectToCheeses();
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
                    <th className="modal__title">Lait</th>
                    <td className="modal__content">{milk}</td>
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
            <div className="editCheese">
              <h1 className="editCheese__title">Modifier {name}</h1>
              <form className="edit__form" onSubmit={formik.handleSubmit}>
                <label htmlFor="name" className="edit__label">Nom
                  <input type="text" id="name" name="name" className="edit__input" onChange={formik.handleChange} value={formik.values.name} />
                </label>
                <label htmlFor="milk" className="edit__label">Lait
                  <input type="text" id="milk" name="milk" className="edit__input" onChange={formik.handleChange} value={formik.values.milk} />
                </label>
                <label htmlFor="image" className="edit__label">Image
                  <input type="text" id="image" name="image" className="edit__input" onChange={formik.handleChange} value={formik.values.image} />
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
              apiURL="cheese"
              redirect="fromages"
            />
          </Button>
          <Button color="yellow" onClick={() => openEdit()}>Modifier</Button>
          <Button color="green">
            <Link to="/admin/fromages" onClick={() => closeEdit()}>
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

ModalPage.propTypes = {
  open: PropTypes.bool.isRequired,
  openModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  edit: PropTypes.bool.isRequired,
  openEdit: PropTypes.func.isRequired,
  closeEdit: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  milk: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default ModalPage;
