import React from 'react';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import axios from 'axios';
import { redirectToCheeses } from 'src/selectors';
import './styles.scss';
import * as Yup from 'yup';

const AddCheese = () => {
  // formik hook takes an object as parameter and return an object that we stock in a variable
  // which contains usefull properties and methods that we can use on this form to :
  // Managing the form state
  // Handling form submission
  // Validation and error messages
  // properties stocked in the initialValues should correspond to attribute name of the input
  const validationSchema = Yup.object({
    name: Yup.string().required('Veuillez entrer un nom pour ce fromage'),
    milk: Yup.string().required('Veuillez préciser le type de lait pour ce produit'),
    image: Yup.string().url('Veuillez entrer une URL valide').required('Veuillez préciser une image pour ce produit'),
    description: Yup.string().required('Veuillez entrer une description pour ce produit'),
  });
  const formik = useFormik({
    initialValues: {
      name: '',
      milk: '',
      image: '',
      description: '',
    },
    // eslint-disable-next-line max-len
    onSubmit: (values) => {
      const token = localStorage.getItem('token');
      axios.post('http://54.152.134.184/fromages-et-vin/Cheese-and-Wine/public/api/back/cheese/add',
        {
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
        .catch((error) => {
          console.log(error);
        });
    },
    validationSchema,
  });
  console.log('Form errors', formik.errors);
  return (
    <div className="addCheese">
      <h1 className="addCheese__title">Ajouter un fromage</h1>
      <form className="add__form" onSubmit={formik.handleSubmit}>
        <label htmlFor="name" className="add__label">Nom
          <input type="text" placeholder="Le nom du fromage" id="name" name="name" className="add__input" onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur} />
          {formik.touched.name && formik.errors.name ? <div className="form__errors">{formik.errors.name}</div> : null}
        </label>
        <label htmlFor="milk" className="add__label">Lait
          <input type="text" placeholder="Le lait duquel provient le fromage" id="milk" name="milk" className="add__input" onChange={formik.handleChange} value={formik.values.milk} onBlur={formik.handleBlur} />
          {formik.touched.milk && formik.errors.milk ? <div className="form__errors">{formik.errors.milk}</div> : null}
        </label>
        <label htmlFor="image" className="add__label">Image
          <input type="text" placeholder="Veuillez entrer une URL" id="image" name="image" className="add__input" onChange={formik.handleChange} value={formik.values.image} onBlur={formik.handleBlur} />
          {formik.touched.image && formik.errors.image ? <div className="form__errors">{formik.errors.image}</div> : null}
        </label>
        <label htmlFor="description" className="add__label">Description
          <textarea id="description" name="description" className="add__input__description" onChange={formik.handleChange} value={formik.values.description} onBlur={formik.handleBlur} />
          {formik.touched.description && formik.errors.description ? <div className="form__errors">{formik.errors.description}</div> : null}
        </label>

        <button type="submit" className="add__button">
          Envoyer
        </button>
      </form>
    </div>
  );
};

AddCheese.propTypes = {};

export default AddCheese;
