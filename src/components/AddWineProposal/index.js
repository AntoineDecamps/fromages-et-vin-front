import React from 'react';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import {
  Button,
  Image,
  Modal,
} from 'semantic-ui-react';
import { redirectToCheeseSlug, buttonSize } from 'src/selectors';
import PropTypes from 'prop-types';
import * as Yup from 'yup';

import './styles.scss';

const AddWineProposal = ({
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
    mainProduct: name,
    associatedProduct: 'Domaine Jean Perrier & Fils',
  };
  const onSubmit = ((values) => {
    axios.post('https://www.cheeseandwine-france.fr/api/api/userproposal/add',
      {
        userName: values.userName,
        mainProduct: name,
        associatedProduct: values.associatedProduct,
      })
      .then((response) => {
        console.log(response);
      })
      .then(() => {
        redirectToCheeseSlug(slug);
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

AddWineProposal.propTypes = {
  open: PropTypes.bool.isRequired,
  openModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  product: PropTypes.string.isRequired,
  propositions: PropTypes.array.isRequired,
  slug: PropTypes.string.isRequired,
};

export default AddWineProposal;
