import React from 'react';
import PropTypes from 'prop-types';

import Header from 'src/components/Header';
import Title from 'src/components/List/Title';
import Products from 'src/components/List/Products';
import Footer from 'src/components/Footer';

import './styles.scss';

const List = () => (
  <div className="list">
    <Header />
    <Title />
    <Products />
    <Footer />
  </div>
);

List.propTypes = {};

export default List;
