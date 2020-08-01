import React from 'react';
import PropTypes from 'prop-types';
import 'animate.css/animate.css';
import { Link } from 'react-router-dom';

import nomatch from './memeEtchebest.png';

import './styles.scss';

const NoMatch = () => (
  <div className="noMatch">
    <h1 className="noMatch__404">404 not found</h1>
    <h2 className="noMatch__title">Oups, il semblerait que la page que vous cherchez n'existe pas</h2>
    <img src={nomatch} alt="" className="noMatch__image rotate animate__animated animate__bounce" />
    <Link to="/">
      <button type="button" className="noMatch__button animate__animated animate__backInUp">
        Retour à l'accueil
      </button>
    </Link>
  </div>
);

NoMatch.propTypes = {};

export default NoMatch;
