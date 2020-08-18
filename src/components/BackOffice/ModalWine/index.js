import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { Modal, Image, Button } from 'semantic-ui-react';
import DeleteModal from 'src/containers/DeleteModal';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { redirectToWines } from 'src/selectors';
import * as Yup from 'yup';
import swal from 'sweetalert';
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
  type,
}) => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Veuillez entrer un nom pour ce produit'),
    type: Yup.string().required('Veuillez préciser le type pour ce produit'),
    appellation: Yup.string().required('Veuillez préciser l\'appellation pour ce produit'),
    picture: Yup.string().url('Veuillez entrer une URL valide').required('Veuillez préciser une image pour ce produit'),
    description: Yup.string().required('Veuillez entrer une description pour ce produit'),
  });
  const formik = useFormik({
    initialValues: {
      name,
      appellation,
      picture,
      description,
      type,
    },
    onSubmit: (values) => {
      const token = localStorage.getItem('token');
      axios.put(`http://54.152.134.184/fromages-et-vin/Cheese-and-Wine/public/api/back/wine/edit/${id}`, {
        name: values.name,
        type: values.type,
        appellation: values.appellation,
        picture: values.picture,
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
          redirectToWines();
        })
        .then(() => {
          swal('Modification prise en compte !', '', 'success');
        })
        .catch((error) => {
          console.log(error);
          swal('Action non autorisée !', 'Vous n\'avez pas les droits pour faire ceci !', 'error');
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
          <Image size="medium" rounded src={picture} verticalAlign="middle" wrapped />
          <Modal.Description>
            {!edit && (
              <div className="modal">
                <h2 className="modal__title">Nom</h2>
                <p className="modal__content">{name}</p>
                <h2 className="modal__title">Appellation</h2>
                <p className="modal__content">{appellation}</p>
                <h2 className="modal__title">Type</h2>
                <p className="modal__content">{type}</p>
                <h2 className="modal__title">Description</h2>
                <p className="modal__content">{description}</p>
              </div>
            )}
            {edit && (
              <div className="editWine">
                <h1 className="editWine__title">Modifier {name}</h1>
                <form className="edit__form" onSubmit={formik.handleSubmit}>
                  <label htmlFor="name" className="edit__label">Nom
                    <input type="text" id="name" name="name" className="edit__input" onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur}/>
                    {formik.touched.name && formik.errors.name ? <div className="form__errors">{formik.errors.name}</div> : null}
                  </label>
                  <label htmlFor="description" className="edit__label">Type
                    <input type="text" id="type" name="type" className="edit__input" onChange={formik.handleChange} value={formik.values.type} onBlur={formik.handleBlur} />
                    {formik.touched.type && formik.errors.type ? <div className="form__errors">{formik.errors.type}</div> : null}
                  </label>
                  <label htmlFor="appellation" className="edit__label">Appellation
                    <input type="text" placeholder="L'appellation du vin" id="appellation" name="appellation" className="edit__input" onChange={formik.handleChange} value={formik.values.appellation} onBlur={formik.handleBlur} />
                    {formik.touched.appellation && formik.errors.appellation ? <div className="form__errors">{formik.errors.appellation}</div> : null}
                  </label>
                  <label htmlFor="description" className="edit__label">Description
                    <textarea id="description" name="description" className="edit__input__description" onChange={formik.handleChange} value={formik.values.description} onBlur={formik.handleBlur} />
                    {formik.touched.description && formik.errors.description ? <div className="form__errors">{formik.errors.description}</div> : null}
                  </label>
                  <label htmlFor="picture" className="edit__label">Image
                    <textarea placeholder="Veuillez entrer une URL" id="picture" name="picture" className="edit__input" onChange={formik.handleChange} value={formik.values.picture} onBlur={formik.handleBlur} />
                    {formik.touched.picture && formik.errors.picture ? <div className="form__errors">{formik.errors.picture}</div> : null}
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
  type: PropTypes.string.isRequired,
};

export default ModalWine;
