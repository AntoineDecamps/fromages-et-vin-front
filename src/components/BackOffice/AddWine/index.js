import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useFormik } from 'formik';
import { redirectToWines } from 'src/selectors';
import * as Yup from 'yup';
import './styles.scss';

const AddWine = () => {
  // formik hook takes an object as parameter and return an object that we stock in a variable
  // which contains usefull properties and methods that we can use on this form to :
  // Managing the form state
  // Handling form submission
  // Validation and error messages
  // properties stocked in the initialValues should correspond to attribute name of the input
  const validationSchema = Yup.object({
    name: Yup.string().required('Veuillez entrer un nom pour ce produit'),
    type: Yup.string().required('Veuillez préciser le type pour ce produit'),
    appellation: Yup.string().required('Veuillez préciser l\'appellation pour ce produit'),
    picture: Yup.string().url('Veuillez entrer une URL valide').required('Veuillez préciser une image pour ce produit'),
    description: Yup.string().required('Veuillez entrer une description pour ce produit'),
  });
  const formik = useFormik({
    initialValues: {
      name: '',
      type: '',
      appellation: '',
      picture: '',
      description: '',
    },
    onSubmit: (values) => {
      const token = localStorage.getItem('token');
      axios.post('http://54.152.134.184/fromages-et-vin/Cheese-and-Wine/public/api/back/wine/add', {
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
        .catch((error) => {
          console.log(error);
        });
    },
    validationSchema,
  });
  console.log('Form value', formik.values);
  return (
    <div className="addWine">
      <h1 className="addWine__title">Ajouter un vin</h1>
      <form className="add__form" onSubmit={formik.handleSubmit}>
        <label htmlFor="name" className="add__label">Nom
          <input type="text" placeholder="Le nom du vin" id="name" name="name" className="add__input" onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur} />
          {formik.touched.name && formik.errors.name ? <div className="form__errors">{formik.errors.name}</div> : null}
        </label>
        <label htmlFor="type" className="add__label">Type
          <input type="text" placeholder="Le type du vin" id="type" name="type" className="add__input" onChange={formik.handleChange} value={formik.values.type} onBlur={formik.handleBlur} />
          {formik.touched.type && formik.errors.type ? <div className="form__errors">{formik.errors.type}</div> : null}
        </label>
        <label htmlFor="appellation" className="add__label">Appellation
          <input type="text" placeholder="L'appellation du vin" id="appellation" name="appellation" className="add__input" onChange={formik.handleChange} value={formik.values.appellation} onBlur={formik.handleBlur} />
          {formik.touched.appellation && formik.errors.appellation ? <div className="form__errors">{formik.errors.appellation}</div> : null}
        </label>
        <label htmlFor="picture" className="add__label">Image
          <input type="text" placeholder="Veuillez entrer une URL" id="picture" name="picture" className="add__input" onChange={formik.handleChange} value={formik.values.picture} onBlur={formik.handleBlur} />
          {formik.touched.picture && formik.errors.picture ? <div className="form__errors">{formik.errors.picture}</div> : null}
        </label>
        <label htmlFor="description" className="add__label">Description
          <textarea id="description" name="description" className="add__input__description" onChange={formik.handleChange} value={formik.values.description} onBlur={formik.handleBlur} />
          {formik.touched.description && formik.errors.description ? <div className="form__errors">{formik.errors.description}</div> : null}
        </label>

        <button type="submit" className="add__button">Envoyer</button>
      </form>
    </div>
  );
};

AddWine.propTypes = {};

export default AddWine;
