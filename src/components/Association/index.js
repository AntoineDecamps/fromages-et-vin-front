import React from 'react';
import PropTypes from 'prop-types';

import Toggler from 'src/containers/Toggler';
import Description from 'src/components/Association/Description';

import fromage from './fromagetest.jpeg';
import './styles.scss';

const Association = ({ open, associatedProduct }) => (
  <div className="association">
    <h2 className="association__title">Mariage proposé</h2>
    <div className="association__card">
      <h3 className="association__card__title">{associatedProduct[0].name}</h3>
      <img src={fromage} alt="" className="association__card__image" />
      <Toggler />
      {open && (
        <Description />
      )}
    </div>
  </div>
);

Association.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default Association;
