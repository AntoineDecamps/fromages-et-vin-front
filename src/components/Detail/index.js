import React from 'react';
import PropTypes from 'prop-types';
import 'animate.css/animate.css';

import { Button } from 'semantic-ui-react';

import './styles.scss';

const Detail = ({ name, picture, description }) => (
  <div className="detail">
    <div className="detail__picture">
      <h2 className="detail__title">{name}</h2>
      <img src={picture} alt="" className="detail__image animate__animated animate__fadeInLeft animate_delay-1s" />
      <div className="detail__flex">
        <div className="detail__button">
          <Button circular icon="glass martini" />
          <p className="detail__button__text">Année</p>
        </div>
        <div className="detail__button">
          <Button circular icon="home" />
          <p className="detail__button__text">Origine</p>
        </div>
      </div>
    </div>
    <div className="detail__product">
      <p className="detail__description animate__animated animate__fadeInRight animate__delay-1s">{description}</p>
    </div>
  </div>
);

Detail.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Detail;
