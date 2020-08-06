import React from 'react';
import PropTypes from 'prop-types';

import Header from 'src/components/Header';
import Detail from 'src/containers/Detail';
import Association from 'src/containers/Association';
import Footer from 'src/containers/Footer';

import './styles.scss';

const ProductDetail = ({ slug }) => (
  <div className="productDetail">
    <Header />
    <Detail
      slug={slug}
    />
    <Association />
    <Footer />
  </div>
);

ProductDetail.propTypes = {
  slug: PropTypes.string.isRequired,
};

export default ProductDetail;
