import React from 'react';
import PropTypes from 'prop-types';

import Header from 'src/components/Header';
import Detail from 'src/components/ProductDetail/Detail';
import Association from 'src/components/ProductDetail/Association';
import Footer from 'src/components/Footer';

import './styles.scss';

const ProductDetail = () => (
  <div className="productDetail">
    <Header />
    <Detail />
    <Association />
    <Footer />
  </div>
);

ProductDetail.propTypes = {};

export default ProductDetail;
