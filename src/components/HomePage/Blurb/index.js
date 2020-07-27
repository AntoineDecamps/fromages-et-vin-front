/* eslint-disable react/self-closing-comp */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-console */
/* eslint-disable max-len */
import React from 'react';
// import PropTypes from 'prop-types';

import './styles.scss';

const Blurb = () => {
  let open = false;

  const handleOnClick = (event) => {
    open = !open;
    const buttonClicked = event.target;
    console.log(buttonClicked);
    buttonClicked.textContent = open === false ? 'Lire plus' : 'Réduire';

    const textToDisplay = buttonClicked.nextSibling;
    console.log(textToDisplay);
    // textToDisplay.className = open === false ? 'blurb__article--text' : 'blurb__article--text-active';

    if (open === false) {
      textToDisplay.textContent = '';
    }
    else {
      textToDisplay.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In debitis iure tempore soluta! Iure suscipit ducimus debitis, deserunt similique est iste alias neque, laboriosam ipsam magni qui! Distinctio, corporis quibusdam!';
    }

    // let textToDisplay = '';
    // if (open === false) {
    //   buttonClicked.removeChild(textToDisplay.textContent);
    // }
    // else {
    //   textToDisplay = buttonClicked.insertAdjacentHTML('afterend', '<p class="blurb__article--text">Lorem ipsum dolor sit amet consectetur adipisicing elit. In debitis iure tempore soluta! Iure suscipit ducimus debitis, deserunt similique est iste alias neque, laboriosam ipsam magni qui! Distinctio, corporis quibusdam!</p>');
    // }
  };

  // /!\ if one button is active after a click, then open will change in true value
  // in this case, if we click on the second button, it will not work until we click again
  // Solution (?) : split both the handleOnClick events just to have one event by button. /!\

  // Two options : 1) we change the className of p to display the text by the click
  // 2) we change the textContent of p

  return (
    <div className="blurb">
      <div className="blurb__cheeses">
        <article className="blurb__article">
          <h3 className="blurb__article--title">Fromages de France</h3>
          <button
            type="button"
            className="blurb__button cheeses"
            onClick={handleOnClick}
          >
            Lire plus
          </button>
          <p className="blurb__article--text"></p>
        </article>
      </div>

      <div className="blurb__wines">
        <article className="blurb__article">
          <h3 className="blurb__article--title">Vins de France</h3>
          <button
            type="button"
            className="blurb__button wines"
            onClick={handleOnClick}
          >
            Lire plus
          </button>
          <p className="blurb__article--text"></p>
        </article>
      </div>
    </div>
  );
};

// Blurb.propTypes = {};

export default Blurb;
