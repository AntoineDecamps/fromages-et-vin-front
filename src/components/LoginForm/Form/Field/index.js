/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';

// import './styles.scss';

const Field = ({
  type,
  value,
  name,
  placeholder,
  onChange,
}) => {
  const handleOnChange = (event) => {
    console.log(event.target.value);
    onChange(event.target.value, name);
  };

  return (
    <input
      type={type}
      name={name}
      value={value}
      className="form__input--email"
      placeholder={placeholder}
      onChange={handleOnChange}
    />
  );
};

Field.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

Field.defaultProps = {
  value: '',
  type: 'text',
};

export default Field;
