/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import {
  Button,
  Image,
  Modal,
} from 'semantic-ui-react';
import { redirectToWineSlug, buttonSize } from 'src/selectors';
import PropTypes from 'prop-types';
import * as Yup from 'yup';

import './styles.scss';

const AddCheeseProposal = ({
  open,
  openModal,
  closeModal,
  name,
  image,
  product,
  propositions,
  slug,
}) => {
  const SignupSchema = Yup.object({
    userName: Yup.string().required('Veuillez indiquer votre notre prénom'),
  });
  const initialValues = {
    userName: '',
    associatedProduct: 'Morbier',
    mainProduct: name,
  };
  const onSubmit = ((values) => {
    axios.post('http://192.168.56.101/wine-and-cheese/fromages-et-vin/Cheese-and-Wine/public/api/userproposal/add',
      {
        userName: values.userName,
        associatedProduct: values.associatedProduct,
        mainProduct: name,
      })
      .then((response) => {
        console.log(response);
      })
      .then(() => {
        redirectToWineSlug(slug);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  const selectList = propositions.map((proposition) => (
    <option
      value={proposition.name}
      key={proposition.name}
    >
      {proposition.name}
    </option>
  ));
  return (
    <div className="addProposal">
      <Modal
        onClose={() => closeModal()}
        onOpen={() => openModal()}
        open={open}
        trigger={<Button color="yellow" size={buttonSize()}>Faire une proposition</Button>}
      >
        <Modal.Header>Proposez une association</Modal.Header>
        <Modal.Content image>
          <Image size="medium" src={image} wrapped />
          <Modal.Description>
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={SignupSchema}
            >
              {({ errors, touched }) => (
                <Form className="addProposal__form" action="">
                  <label className="addProposal__label" htmlFor="userName"> Quel est votre prénom ?</label>
                  <Field
                    type="text"
                    id="userName"
                    name="userName"
                  />
                  {errors.userName && touched.userName ? (
                    <div className="form__errors">{errors.userName}</div>
                  ) : null}
                  <label htmlFor="associatedProduct" className="addProposal__label">{`Quel ${product} souhaitez-vous proposer avec le ${name} ?`}</label>
                  <Field as="select" id="associatedProduct" name="associatedProduct">
                    {selectList}
                  </Field>
                  <button className="proposal__button" type="submit">Envoyer</button>
                </Form>
              )}
            </Formik>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button
            content="Annuler"
            labelPosition="right"
            icon="close"
            onClick={() => closeModal()}
            negative
          />
        </Modal.Actions>
      </Modal>
    </div>
  );
};

AddCheeseProposal.propTypes = {
  open: PropTypes.bool.isRequired,
  openModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  product: PropTypes.string.isRequired,
  propositions: PropTypes.array.isRequired,
  slug: PropTypes.array.isRequired,
};

export default AddCheeseProposal;
