/* eslint-disable react/self-closing-comp */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-console */
/* eslint-disable max-len */
import React from 'react';
// import PropTypes from 'prop-types';

import './styles.scss';

const Blurb = () => {
  let openCheeses = false;
  let openWines = false;

  const handleOnClick = (event) => {
    const buttonClicked = event.target;
    const textToDisplay = buttonClicked.previousSibling;
    const titleToUnderline = textToDisplay.previousSibling;
    const targetedBlock = buttonClicked.closest('div');

    if (buttonClicked.classList.contains('cheeses')) {
      openCheeses = !openCheeses;
      buttonClicked.textContent = (openCheeses === false) ? 'Lire plus' : 'Réduire';
      textToDisplay.className = (openCheeses === false) ? 'blurb__article--text' : 'blurb__article--text opened';
      titleToUnderline.className = (openCheeses === false) ? 'blurb__article--title' : 'blurb__article--title opened';
      targetedBlock.className = (openCheeses === false) ? 'blurb__cheeses' : 'blurb__cheeses opened';
    }

    if (buttonClicked.classList.contains('wines')) {
      openWines = !openWines;
      buttonClicked.textContent = (openWines === false) ? 'Lire plus' : 'Réduire';
      textToDisplay.className = (openWines === false) ? 'blurb__article--text' : 'blurb__article--text opened';
      titleToUnderline.className = (openWines === false) ? 'blurb__article--title' : 'blurb__article--title opened';
      targetedBlock.className = (openWines === false) ? 'blurb__wines' : 'blurb__wines opened';
    }
  };

  return (
    <div className="blurb">
      <div className="blurb__cheeses">
        <article className="blurb__article">
          <h3 className="blurb__article--title">Fromages de France</h3>
          <p className="blurb__article--text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In debitis iure tempore soluta! Iure suscipit ducimus debitis, deserunt similique est iste alias neque.
          </p>
          <button
            type="button"
            className="blurb__button cheeses"
            onClick={handleOnClick}
          >
            Lire plus
          </button>
        </article>
      </div>

      <div className="blurb__wines">
        <article className="blurb__article">
          <h3 className="blurb__article--title">Vins de France</h3>
          <p className="blurb__article--text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In debitis iure tempore soluta! Iure suscipit ducimus debitis, deserunt similique est iste alias neque.
          </p>
          <button
            type="button"
            className="blurb__button wines"
            onClick={handleOnClick}
          >
            Lire plus
          </button>
        </article>
      </div>
    </div>
  );
};

// Blurb.propTypes = {};

export default Blurb;
