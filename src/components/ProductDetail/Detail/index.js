import React from 'react';
import PropTypes from 'prop-types';
import 'animate.css/animate.css';

import { Button } from 'semantic-ui-react';
import Parallax from 'react-rellax';
import wine from './bottleofwine.jpg';

import './styles.scss';

const Detail = () => (
  <div className="detail">
    <Parallax speed={-8}>
      <div className="detail__picture">
        <h2 className="detail__title">Nom du vin</h2>
        <img src={wine} alt="" className="detail__image animate__animated animate__fadeInLeft animate_delay-1s" />
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
    </Parallax>
    <Parallax speed={15}>
      <div className="detail__product">
        <p className="detail__description animate__animated animate__fadeInRight animate__delay-1s">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum ut dolores et temporibus fugiat nobis. Neque doloremque earum dolorem labore! Voluptatem temporibus magni nulla, dolor nihil fuga Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla ut sit deleniti eaque quo laboriosam q</p>
      </div>
    </Parallax>
  </div>
);

Detail.propTypes = {};

export default Detail;
