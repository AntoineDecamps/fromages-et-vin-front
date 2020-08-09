import React from 'react';
import PropTypes from 'prop-types';

import Toggler from 'src/containers/Toggler';
import Description from 'src/components/WineAssociation/Description';
import { Icon } from 'semantic-ui-react';
import fromage from './fromagetest.jpeg';
import './styles.scss';

const WineAssociation = ({ open, associatedProduct }) => (
  <div className="flexAssociation">
    <div className="flexAssociation__icon1">
      <Icon color="yellow" name="angle left" size="huge" />
    </div>
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
    <div className="flexAssociation__icon2">
      <Icon color="yellow" name="angle right" size="huge" />
    </div>

  </div>
);

WineAssociation.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default WineAssociation;
