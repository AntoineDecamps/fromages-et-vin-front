import React from 'react';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import axios from 'axios';

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
      milk: '',
      image: '',
      description: '',
    },
    onSubmit: (values) => {
      axios.post('http://54.152.134.184/fromages-et-vin/Cheese-and-Wine/public/api/back/cheese/add', { values })
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
    <div className="addCheese">
      <h1 className="addCheese__title">Ajouter un fromage</h1>
      <form className="add__form" onSubmit={formik.handleSubmit}>
        <label htmlFor="name" className="add__label">Nom
          <input type="text" placeholder="Le nom du fromage" id="name" name="name" className="add__input" onChange={formik.handleChange} value={formik.values.name} />
        </label>
        <label htmlFor="milk" className="add__label">Lait
          <input type="text" placeholder="Le lait duquel provient le fromage" id="milk" name="milk" className="add__input" onChange={formik.handleChange} value={formik.values.milk} />
        </label>
        <label htmlFor="image" className="add__label">Image
          <input type="text" placeholder="Veuillez entrer une URL" id="image" name="image" className="add__input" onChange={formik.handleChange} value={formik.values.image} />
        </label>
        <label htmlFor="description" className="add__label">Description
          <input type="text" id="description" name="description" className="add__input__description" onChange={formik.handleChange} value={formik.values.description} />
        </label>

        <button type="submit" className="add__button">Envoyer</button>
      </form>
    </div>
  );
};

AddCheese.propTypes = {};

export default AddCheese;
