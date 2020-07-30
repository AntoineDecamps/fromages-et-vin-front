import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Toggler = ({ handleToggle, open }) => {
  const className = open ? 'toggler__button toggler__button--open' : 'toggler__button';
  return (
    <div className="toggler">
      <button
        type="button"
        className={className}
        onClick={handleToggle}
      >
        =
      </button>
    </div>
  );
};

Toggler.propTypes = {
  handleToggle: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default Toggler;
