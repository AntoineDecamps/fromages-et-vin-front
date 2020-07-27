import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Blurb = () => (
  <div className="blurb">
    <div className="blurb__cheeses">
      <h3 className="blurb__cheeses--title">Fromages de France</h3>
      <button type="button" className="blurb__button blurb__cheeses--button">Lire plus</button>
      <img src="" alt="" className="blurb__cheeses--img" />
    </div>
    <div className="blurb__wines">
      <h3 className="blurb__wines--title">Vins de France</h3>
      <button type="button" className="blurb__button blurb__wines--button">Lire plus</button>
      <img src="" alt="" className="blurb__wines--img" />
    </div>
  </div>
);

Blurb.propTypes = {};

export default Blurb;
