import React from 'react';

import { Modal, Image, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import DeleteModal from 'src/containers/DeleteModal';
import axios from 'axios';
import PropTypes from 'prop-types';
import { redirectToUsers } from 'src/selectors';
import * as Yup from 'yup';
import avatar from './avatar.png';

import './styles.scss';

const ModalUser = ({
  open,
  openModal,
  closeModal,
  name,
  roles,
  email,
  password,
  id,
  edit,
  openEdit,
  closeEdit,
}) => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Veuillez indiquer un nom pour cet utilisateur'),
    roles: Yup.string().matches('^ROLE_ADMIN$|^ROLE_SUP_ADMIN$', 'Veuillez indiquer un rôle qui existe : ROLE_ADMIN ou ROLE_SUP_ADMIN').required('Veuillez indiquer un rôle'),
    email: Yup.string().email('Format d\'email invalide !').required('Veuillez indiquer un email'),
    password: Yup.string().required('Veuillez indiquer un mot-de-passe'),
  });
  const formik = useFormik({
    initialValues: {
      name,
      email,
      roles,
      password: '',
    },
    onSubmit: (values) => {
      const token = localStorage.getItem('token');
      axios.put(`http://54.152.134.184/fromages-et-vin/Cheese-and-Wine/public/api/back/user/edit/${id}`, {
        name: values.name,
        email: values.email,
        roles: [values.roles],
        password: values.password,
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
          redirectToUsers();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    validationSchema,
  });
  return (
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
          <Image src={avatar} size="medium" rounded wrapped />
          <Modal.Description>
            {!edit && (
              <div className="modal">
                <h2 className="modal__title">Nom</h2>
                <p className="modal__content">{name}</p>
                <h2 className="modal__title">Email</h2>
                <p className="modal__content">{email}</p>
                <h2 className="modal__title">Rôle</h2>
                <p className="modal__content">{roles}</p>
              </div>
            )}
            {edit && (
              <div className="editUser">
                <h1 className="editUser__title">Modifier {name}</h1>
                <form className="edit__form" onSubmit={formik.handleSubmit}>
                  <label htmlFor="name" className="edit__label">Nom
                    <input type="text" id="name" name="name" className="edit__input" onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur} />
                    {formik.touched.name && formik.errors.name ? <div className="form__errors">{formik.errors.name}</div> : null}
                  </label>
                  <label htmlFor="email" className="edit__label">Email
                    <input type="email" id="email" name="email" className="edit__input" onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} />
                    {formik.touched.email && formik.errors.email ? <div className="form__errors">{formik.errors.email}</div> : null}
                  </label>
                  <label htmlFor="roles" className="edit__label">Rôle de l'utilisateur
                    <input type="text" className="edit__input" name="roles" id="roles" onChange={formik.handleChange} value={formik.values.roles} onBlur={formik.handleBlur} />
                    {formik.touched.roles && formik.errors.roles ? <div className="form__errors">{formik.errors.roles}</div> : null}
                  </label>
                  <label htmlFor="description" className="edit__label">Mot-de-passe
                    <input type="text" id="password" name="password" className="edit__input" onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur} />
                    {formik.touched.password && formik.errors.password ? <div className="form__errors">{formik.errors.password}</div> : null}
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
              apiURL="user"
              redirect="utilisateurs"
            />
          </Button>
          <Button color="yellow" onClick={() => openEdit()}>Modifier</Button>
          <Button color="green">
            <Link to="/admin/utilisateurs" onClick={() => closeEdit()}>
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
};

ModalUser.propTypes = {
  open: PropTypes.bool.isRequired,
  openModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  roles: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  edit: PropTypes.bool.isRequired,
  openEdit: PropTypes.func.isRequired,
  closeEdit: PropTypes.func.isRequired,
};

export default ModalUser;
