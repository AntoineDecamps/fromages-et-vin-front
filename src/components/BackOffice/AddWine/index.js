import React from 'react';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';

import './styles.scss';

const AddWine = () => {
  // formik hook takes an object as parameter and return an object that we stock in a variable
  // which contains usefull properties and methods that we can use on this form to :
  // Managing the form state
  // Handling form submission
  // Validation and error messages
  // properties stocked in the initialValues should correspond to attribute name of the input
  const formik = useFormik({
    initialValues: {
      name: '',
      type: '',
      appelation: '',
      image: '',
      description: '',
    },
  });
  console.log('Form value', formik.values);
  return (
    <div className="addWine">
      <h1 className="addWine__title">Ajouter un vin</h1>
      <form className="add__form">
        <label htmlFor="name" className="add__label">Nom
          <input type="text" placeholder="Le nom du vin" id="name" name="name" className="add__input" onChange={formik.handleChange} value={formik.values.name} />
        </label>
        <label htmlFor="description" className="add__label">Type
          <input type="text" placeholder="Le type du vin" id="type" name="type" className="add__input__type" onChange={formik.handleChange} value={formik.values.type} />
        </label>
        <label htmlFor="appelation" className="add__label">Appelation
          <input type="text" placeholder="L'appelation du vin" id="appelation" name="appelation" className="add__input" onChange={formik.handleChange} value={formik.values.appelation} />
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
  );
};

AddWine.propTypes = {};

export default AddWine;
