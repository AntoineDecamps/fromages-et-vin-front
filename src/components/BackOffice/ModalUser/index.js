import React from 'react';

import { Modal, Image, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import DeleteModal from 'src/containers/DeleteModal';
import axios from 'axios';
import PropTypes from 'prop-types';
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
  const formik = useFormik({
    initialValues: {
      name,
      email,
      roles,
      password,
    },
    onSubmit: (values) => {
      axios.put(`http://54.152.134.184/fromages-et-vin/Cheese-and-Wine/public/api/back/user/edit/${id}`, { values })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
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
              <div className="modal__user">
                <table className="modal__user__table">
                  <tr>
                    <th className="modal__user__title">Nom</th>
                    <td className="modal__user__content">{name}</td>
                  </tr>
                  <tr>
                    <th className="modal__user__title">ID</th>
                    <td className="modal__user__content">{id}</td>
                  </tr>
                  <tr>
                    <th className="modal__user__title">rôle</th>
                    <td className="modal__user__content">{roles}</td>
                  </tr>
                  <tr>
                    <th className="modal__user__title">email</th>
                    <td className="modal__user__content">{email}</td>
                  </tr>
                </table>
              </div>
            )}
            {edit && (
              <div className="editUser">
                <h1 className="editUser__title">Modifier {name}</h1>
                <form className="edit__form" onSubmit={formik.handleSubmit}>
                  <label htmlFor="name" className="edit__label">Nom
                    <input type="text" id="name" name="name" className="edit__input" onChange={formik.handleChange} value={formik.values.name} />
                  </label>
                  <label htmlFor="email" className="edit__label">Email
                    <input type="email" id="email" name="email" className="edit__input" onChange={formik.handleChange} value={formik.values.email} />
                  </label>
                  <label htmlFor="role" className="edit__label">Rôle de l'utilisateur
                    <select className="edit__input" name="pets" id="pet-select">
                      <option
                        onChange={formik.handleChange}
                        value={formik.values.roles}
                      >
                        {roles}
                      </option>
                    </select>
                  </label>
                  <label htmlFor="description" className="edit__label">Mot-de-passe
                    <input type="text" id="password" name="password" className="edit__input" onChange={formik.handleChange} value={formik.values.password} />
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
