/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import { redirectToCheeses } from 'src/selectors';
import './styles.scss';
import * as Yup from 'yup';

const AddCheese = ({ wines }) => {
  // const selectList = wines.map((wine) => (
  //   <option
  //     value={wine.name}
  //     key={wine.id}
  //   >
  //     {wine.name}
  //   </option>
  // ));
  const SignupSchema = Yup.object({
    name: Yup.string().required('Veuillez entrer un nom pour ce fromage'),
    milk: Yup.string().required('Veuillez préciser le type de lait pour ce produit'),
    picture: Yup.string().url('Veuillez entrer une URL valide').required('Veuillez préciser une image pour ce produit'),
    description: Yup.string().required('Veuillez entrer une description pour ce produit'),
    origin: Yup.string().required('Veuillez entrer la provenance pour ce produit'),
    wineDescription: Yup.string().required('Veuillez entrer une description pour ce produit'),
    wine: Yup.string().required('Veuillez entrer un nom pour ce vin'),
    winePicture: Yup.string().url('Veuillez entrer une URL valide').required('Veuillez préciser une image pour ce produit'),
  });
  const initialValues = {
    name: '',
    milk: '',
    picture: '',
    description: '',
    origin: '',
    wines: '',
    winePicture: '',
    wineDescription: '',
  };
    // eslint-disable-next-line max-len
  const onSubmit = ((values) => {
    const token = localStorage.getItem('token');
    axios.post('http://54.152.134.184/fromages-et-vin/Cheese-and-Wine/public/api/back/cheese/add',
      {
        name: values.name,
        milk: values.milk,
        picture: values.picture,
        description: values.description,
        origin: { name: values.origin },
        wines: {
          name: values.wine,
          picture: values.winePicture,
          description: values.wineDescription,
        },
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
  });
  return (
    <div className="addCheese">
      <h1 className="addCheese__title">Ajouter un fromage</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={SignupSchema}
      >
        {({ errors, touched }) => (
          <Form className="addProposal__form" action="">
            <label htmlFor="name" className="addProposal__label">Nom</label>
            <Field
              type="text"
              id="name"
              name="name"
              placeholder="Le nom du fromage"
            />
            {errors.name && touched.name ? (
              <div className="form__errors">{errors.name}</div>
            ) : null}
            <label htmlFor="milk" className="addProposal__label">Lait</label>
            <Field
              type="text"
              id="milk"
              name="milk"
              placeholder="Le type de lait"
            />
            {errors.milk && touched.milk ? (
              <div className="form__errors">{errors.milk}</div>
            ) : null}
            <label htmlFor="origin" className="addProposal__label">Origine</label>
            <Field
              type="text"
              id="origin"
              name="origin"
              placeholder="L'origine du fromage"
            />
            {errors.origin && touched.origin ? (
              <div className="form__errors">{errors.origin}</div>
            ) : null}
            <label htmlFor="description" className="addProposal__label">Description</label>
            <Field
              type="text"
              id="description"
              name="description"
              placeholder="Description du produit"
            />
            {errors.description && touched.description ? (
              <div className="form__errors">{errors.description}</div>
            ) : null}
            <label htmlFor="picture" className="addProposal__label">Image</label>
            <Field
              type="text"
              id="picture"
              name="picture"
              placeholder="Veuillez entrer une URL"
            />
            {errors.picture && touched.picture ? (
              <div className="form__errors">{errors.picture}</div>
            ) : null}
            <label htmlFor="wine" className="addProposal__label">Avec quel vin souhaitez-vous associer ce fromage ?</label>
            <Field
              type="text"
              id="wine"
              name="wine"
              placeholder="Le vin que vous voulez associer"
            />
            {errors.wine && touched.wine ? (
              <div className="form__errors">{errors.wine}</div>
            ) : null}
            <label htmlFor="wineDescription" className="addProposal__label">Description du vin</label>
            <Field
              type="text"
              id="wineDescription"
              name="wineDescription"
              placeholder="La description de ce vin"
            />
            {errors.wineDescription && touched.wineDescription ? (
              <div className="form__errors">{errors.wineDescription}</div>
            ) : null}
            <label htmlFor="winePicture" className="addProposal__label">Image du vin</label>
            <Field
              type="text"
              id="winePicture"
              name="winePicture"
              placeholder="La photo de ce vin"
            />
            {errors.winePicture && touched.winePicture ? (
              <div className="form__errors">{errors.winePicture}</div>
            ) : null}
            {/* <label htmlFor="wine" className="addProposal__label">Avec quel vin souhaitez-vous associer ce fromage ?</label>
            <Field as="select" id="wine" name="wine">
              {selectList}
            </Field> */}
            <button className="proposal__button" type="submit">Envoyer</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

AddCheese.propTypes = {};

export default AddCheese;
