import React from 'react';
import 'animate.css/animate.css';

import { Link } from 'react-router-dom';
import './styles.scss';

const BackHomePage = () => (
  <div className="backHomePage">
    <p className="backHomePage__text">Bienvenue sur le Back-office Wine & Cheese</p>
    <p className="backHomePage__text">Vous pouvez ajouter, editer et supprimer des fromages, vins et utilisateurs ici !</p>
    <p className="backHomePage__italic">La version mobile n'est pas encore disponible.</p>
    <Link to="/">
      <button type="button" className="backHomePage__button animate__animated animate__backInUp">
        Retour à l'accueil
      </button>
    </Link>
  </div>
);

export default BackHomePage;
