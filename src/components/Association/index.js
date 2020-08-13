import React from 'react';
import PropTypes from 'prop-types';

import Toggler from 'src/containers/Toggler';
import Description from 'src/components/Association/Description';
import { Icon } from 'semantic-ui-react';
// import fromage from './fromagetest.jpeg';
import './styles.scss';

const Association = ({
  open,
  slider,
  associatedProduct,
  handleSlider,
  associations,
}) => {
  console.log('blabla', associations);
  let userProposals;
  if (associations.length > 0) {
    userProposals = () => (associations.map((association) => (
      <div className="userProposal__detail">
        <div key={association.userName}>
          <h2 className="userProposal__name">{`${association.userName} vous propose :`}</h2>
          <p className="userProposal__choice">{association.associatedProduct}</p>
        </div>
      </div>
    )));
  }
  else {
    userProposals = () => (
      <div className="userProposal__detail">
        <p>Pour l'instant aucun utilisateur n'a proposé d'association pour ce produit</p>
        <p>Soyez le premier à en proposer une ! </p>
      </div>
    );
  }

  // const noProposal = () => (
  //   <p>Soyez le premier à suggérer un nouvel accord.</p>
  // );

  return (
    <div className="flexAssociation">
      <div className="flexAssociation__icon1" onClick={handleSlider}>
        <Icon color="yellow" name="angle left" size="big" />
      </div>
      {slider && (
        <div className="association">
          <h2 className="association__title">Mariage proposé</h2>
          <div className="association__card">
            <h3 className="association__card__title">{associatedProduct[0].name}</h3>
            <img src={associatedProduct[0].picture} alt="" className="association__card__image" />
            <Toggler />
            {open && (
              <Description
                description={associatedProduct[0].description}
              />
            )}
          </div>
        </div>
      )}
      {!slider && (
        <div className="association">
          <h2 className="association__title">Proposition des utilisateurs</h2>
          <div className="association__card userProposal">
            <h3 className="userProposal__title">Retrouvez ci-dessous les propositions faites par les utilisateurs du site</h3>
            <div className="userProposal__propositions">
              {userProposals()}
            </div>
          </div>
        </div>
      )}
      <div className="flexAssociation__icon2" onClick={handleSlider}>
        <Icon color="yellow" name="angle right" size="big" />
      </div>
    </div>
  );
};

Association.propTypes = {
  open: PropTypes.bool.isRequired,
  slider: PropTypes.bool.isRequired,
  associatedProduct: PropTypes.array.isRequired,
  handleSlider: PropTypes.func.isRequired,
  length: PropTypes.number,
  associations: PropTypes.array.isRequired,
};

Association.defaultProps = {
  length: 0,
};

export default Association;
