/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Blurb = () => (
  <div className="blurb">
    <div className="blurb__cheeses">
      <article className="blurb__article">
        <h3 className="blurb__article--title">Fromages de France</h3>
        <button
          type="button"
          className="blurb__button"
        >
          Lire plus
        </button>
        <p className="blurb__article--text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In debitis iure tempore soluta! Iure suscipit ducimus debitis, deserunt similique est iste alias neque, laboriosam ipsam magni qui! Distinctio, corporis quibusdam!
        </p>
      </article>
    </div>

    <div className="blurb__wines">
      <article className="blurb__article">
        <h3 className="blurb__article--title">Vins de France</h3>
        <button
          type="button"
          className="blurb__button"
        >
          Lire plus
        </button>
        {/* <p className="blurb__article--text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In debitis iure tempore soluta! Iure suscipit ducimus debitis, deserunt similique est iste alias neque, laboriosam ipsam magni qui! Distinctio, corporis quibusdam!
        </p> */}
      </article>
    </div>
  </div>
);

Blurb.propTypes = {};

export default Blurb;
