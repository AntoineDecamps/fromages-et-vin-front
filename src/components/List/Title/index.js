import React from 'react';
import PropTypes from 'prop-types';

import 'src/selectors/list';

import './styles.scss';

const Title = ({ name }) => {
  console.log(name);
  // const card = document.querySelector('.card__img');
  // console.log(card);

  // // if (name === 'Fromages') {
  // //   card.style.padding = '0';
  // // }

  // cardStyle();

  return (
    <h2 className="title">Nos {name}</h2>
  );
};

Title.propTypes = {
  name: PropTypes.string.isRequired,
  cardStyle: PropTypes.func.isRequired,
};

export default Title;
