import React from 'react';
import PropTypes from 'prop-types';
import 'animate.css/animate.css';

import { Button } from 'semantic-ui-react';

import './styles.scss';

const Detail = ({
  name,
  picture,
  description,
  product,
  origin,
  milk,
  type,
}) => {
  let buttonToDisplay;
  if (product === 'fromage') {
    buttonToDisplay = () => (
      <>
        <div className="detail__button">
          <Button circular icon="home" />
          <p className="detail__button__text">{origin}</p>
        </div>
        <div className="detail__button">
          <Button circular icon="tint" />
          <p className="detail__button__text">{milk}</p>
        </div>
      </>
    );
  }
  else if (product === 'vin') {
    buttonToDisplay = () => (
      <>
        <div className="detail__button">
          <Button circular icon="home" />
          <p className="detail__button__text">{origin}</p>
        </div>
        <div className="detail__button">
          <Button circular icon="glass martini" />
          <p className="detail__button__text">{type}</p>
        </div>
      </>
    );
  }
  return (
    <div className="detail">
      <div className="detail__picture">
        <h2 className="detail__title">{name}</h2>
        <img src={picture} alt="" className="detail__image animate__animated animate__fadeInLeft animate_delay-1s" />
        <div className="detail__flex">
          {buttonToDisplay()}
        </div>
      </div>
      <div className="detail__product">
        <p className="detail__description animate__animated animate__fadeInRight animate__delay-1s">{description}</p>
      </div>
    </div>
)};

Detail.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  product: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  milk: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Detail;
