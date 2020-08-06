import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useFormik } from 'formik';

import './styles.scss';

const AddCheese = () => {
  // formik hook takes an object as parameter and return an object that we stock in a variable
  // which contains usefull properties and methods that we can use on this form to :
  // Managing the form state
  // Handling form submission
  // Validation and error messages
  // properties stocked in the initialValues should correspond to attribute name of the input
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      role: 'ROLE_ADMIN',
      password: '',
    },
    onSubmit: (values) => {
      axios.post('http://54.152.134.184/fromages-et-vin/Cheese-and-Wine/public/api/back/user/add', { values })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });
  console.log('Form value', formik.values);
  return (
    <div className="addUser">
      <h1 className="addUser__title">Ajouter un utilisateur</h1>
      <form className="add__form" onSubmit={formik.handleSubmit}>
        <label htmlFor="name" className="add__label">Nom
          <input type="text" placeholder="Le nom de l'utilisateur" id="name" name="name" className="add__input" onChange={formik.handleChange} value={formik.values.name} />
        </label>
        <label htmlFor="email" className="add__label">Email
          <input type="email" placeholder="L'email de l'utilisateur" id="email" name="email" className="add__input" onChange={formik.handleChange} value={formik.values.email} />
        </label>
        <label htmlFor="role" className="add__label">Rôle de l'utilisateur
          <input type="text" id="role" name="role" className="add__input__role" onChange={formik.handleChange} value={formik.values.role} />
        </label>
        <label htmlFor="description" className="add__label">Mot-de-passe
          <input type="password" id="password" name="password" className="add__input__password" onChange={formik.handleChange} value={formik.values.password} />
        </label>

        <button type="submit" className="add__button">Envoyer</button>
      </form>
    </div>
  );
};

AddCheese.propTypes = {};

export default AddCheese;
