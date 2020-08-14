import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { Modal, Image, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { redirectToCheeses } from 'src/selectors';
import DeleteModal from 'src/containers/DeleteModal';
import PropTypes from 'prop-types';
import * as Yup from 'yup';

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
  const validationSchema = Yup.object({
    name: Yup.string().required('Veuillez entrer un nom pour ce fromage'),
    milk: Yup.string().required('Veuillez préciser le type de lait pour ce produit'),
    image: Yup.string().url('Veuillez entrer une URL valide').required('Veuillez préciser une image pour ce produit'),
    description: Yup.string().required('Veuillez entrer une description pour ce produit'),
  });
  const formik = useFormik({
    initialValues: {
      name,
      milk,
      image: picture,
      description,
    },
    onSubmit: (values) => {
      const token = localStorage.getItem('token');
      axios.put(`http://54.152.134.184/fromages-et-vin/Cheese-and-Wine/public/api/back/cheese/edit/${id}`, {
        name: values.name,
        milk: values.milk,
        picture: values.image,
        description: values.description,
      }, {
        headers: {
          'X-Auth-Token': token,
          'content-type': 'application/json',
        },
      })
        .then((response) => {
          console.log(response);
        })
        .then(() => {
          redirectToCheeses();
        })
        .then(() => {
          window.alert('Modification ajoutée !');
        })
        .catch((error) => {
          console.log(error);
        });
    },
    validationSchema,
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
          <Image size="medium" className="modalPage__image" rounded src={picture} verticalAlign="middle" wrapped />
          <Modal.Description>
            {!edit && (
              <div className="modal">
                <h2 className="modal__title">Nom</h2>
                <p className="modal__content">{name}</p>
                <h2 className="modal__title">Lait</h2>
                <p className="modal__content">{milk}</p>
                <h2 className="modal__title">Description</h2>
                <p className="modal__content">{description}</p>
              </div>
            )}
            {edit && (
            <div className="editCheese">
              <h1 className="editCheese__title">Modifier {name}</h1>
              <form className="edit__form" onSubmit={formik.handleSubmit}>
                <label htmlFor="name" className="edit__label">Nom
                  <input type="text" id="name" name="name" className="edit__input" onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur} />
                  {formik.touched.name && formik.errors.name ? <div className="form__errors">{formik.errors.name}</div> : null}
                </label>
                <label htmlFor="milk" className="edit__label">Lait
                  <input type="text" id="milk" name="milk" className="edit__input" onChange={formik.handleChange} value={formik.values.milk} onBlur={formik.handleBlur} />
                  {formik.touched.milk && formik.errors.milk ? <div className="form__errors">{formik.errors.milk}</div> : null}
                </label>
                <label htmlFor="image" className="edit__label">Image
                  <textarea id="image" name="image" className="edit__input edit__input__image" onChange={formik.handleChange} value={formik.values.image} onBlur={formik.handleBlur} />
                  {formik.touched.image && formik.errors.image ? <div className="form__errors">{formik.errors.image}</div> : null}
                </label>
                <label htmlFor="description" className="edit__label">Description
                  <textarea id="description" name="description" className="edit__input edit__input__description" onChange={formik.handleChange} value={formik.values.description} onBlur={formik.handleBlur} />
                  {formik.touched.description && formik.errors.description ? <div className="form__errors">{formik.errors.description}</div> : null}
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
