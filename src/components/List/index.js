import React from 'react';
import PropTypes from 'prop-types';

import Header from 'src/components/Header';
import Title from 'src/components/List/Title';
import Products from 'src/components/List/Products';
import Footer from 'src/containers/Footer';

import './styles.scss';

const List = ({ product, name, redirectURL }) => (
  <div className="listPage">
    <Header />
    <div className="list">
      <Title
        name={name}
      />
      <Products
        productList={product}
        redirectURL={redirectURL}
      />
    </div>
    <Footer />
  </div>
);

List.propTypes = {
  name: PropTypes.string.isRequired,
  product: PropTypes.array.isRequired,
  redirectURL: PropTypes.string.isRequired,
};

export default List;
