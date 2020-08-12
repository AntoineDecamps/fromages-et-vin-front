import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useFormik } from 'formik';
import { redirectToUsers } from 'src/selectors';
import * as Yup from 'yup';
import './styles.scss';

const AddCheese = () => {
  // formik hook takes an object as parameter and return an object that we stock in a variable
  // which contains usefull properties and methods that we can use on this form to :
  // Managing the form state
  // Handling form submission
  // Validation and error messages
  // properties stocked in the initialValues should correspond to attribute name of the input
  const validationSchema = Yup.object({
    name: Yup.string().required('Ce champ est requis'),
    roles: Yup.string().required('Ce champ est requis'),
    email: Yup.string().email('Format d\'email invalide !').required('Ce champ est requis'),
    password: Yup.string().required('Ce champ est requis'),
  });
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      roles: 'ROLE_ADMIN',
      password: '',
    },
    onSubmit: (values) => {
      const token = localStorage.getItem('token');
      axios.post('http://54.152.134.184/fromages-et-vin/Cheese-and-Wine/public/api/back/user/add', {
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
  console.log('Form value', formik.values);
  return (
    <div className="addUser">
      <h1 className="addUser__title">Ajouter un utilisateur</h1>
      <form className="add__form" onSubmit={formik.handleSubmit}>
        <label htmlFor="name" className="add__label">Nom
          <input type="text" placeholder="Le nom de l'utilisateur" id="name" name="name" className="add__input" onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur} />
          {formik.touched.name && formik.errors.name ? <div className="form__errors">{formik.errors.name}</div> : null}
        </label>
        <label htmlFor="email" className="add__label">Email
          <input type="email" placeholder="L'email de l'utilisateur" id="email" name="email" className="add__input" onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} />
          {formik.touched.email && formik.errors.email ? <div className="form__errors">{formik.errors.email}</div> : null}
        </label>
        <label htmlFor="roles" className="add__label">Rôle de l'utilisateur
          <input type="text" id="roles" name="roles" className="add__input" onChange={formik.handleChange} value={formik.values.roles} onBlur={formik.handleBlur} />
          {formik.touched.roles && formik.errors.roles ? <div className="form__errors">{formik.errors.roles}</div> : null}
        </label>
        <label htmlFor="description" className="add__label">Mot-de-passe
          <input type="text" id="password" name="password" className="add__input__password" onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur} />
          {formik.touched.password && formik.errors.password ? <div className="form__errors">{formik.errors.password}</div> : null}
        </label>

        <button type="submit" className="add__button">Envoyer</button>
      </form>
    </div>
  );
};

AddCheese.propTypes = {};

export default AddCheese;
