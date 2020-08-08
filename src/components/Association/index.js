import React from 'react';
import PropTypes from 'prop-types';
import Parallax from 'react-rellax';

import Toggler from 'src/containers/Toggler';
import Description from 'src/components/Association/Description';

import fromage from './fromagetest.jpeg';
import './styles.scss';

const Association = ({ open }) => (
  <div className="association">
    <Parallax speed={10}>
      <h2 className="association__title">Mariage proposé</h2>
      <div className="association__card">
        <h3 className="association__card__title">Nom du fromage</h3>
        <img src={fromage} alt="" className="association__card__image" />
        <Toggler />
        {open && (
          <Description />
        )}
      </div>
    </Parallax>
  </div>
);

Association.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default Association;
