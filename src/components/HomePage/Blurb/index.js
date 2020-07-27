/* eslint-disable prefer-destructuring */
/* eslint-disable no-console */
/* eslint-disable max-len */
import React from 'react';
// import PropTypes from 'prop-types';

import './styles.scss';

const Blurb = () => {
  let open = false;

  const handleOnClick = () => {
    open = !open;
    // console.log(open);
  };

  console.log(handleOnClick);
  const className = open ? 'blurb__article--text-active' : 'blurb__article--text';

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
          <p className={className}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In debitis iure tempore soluta! Iure suscipit ducimus debitis, deserunt similique est iste alias neque, laboriosam ipsam magni qui! Distinctio, corporis quibusdam!
          </p>
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
          <p className={className}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In debitis iure tempore soluta! Iure suscipit ducimus debitis, deserunt similique est iste alias neque, laboriosam ipsam magni qui! Distinctio, corporis quibusdam!
          </p>
        </article>
      </div>
    </div>
  );
};

// Blurb.propTypes = {};

export default Blurb;
