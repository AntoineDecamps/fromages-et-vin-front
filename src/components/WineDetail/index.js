import React from 'react';
import PropTypes from 'prop-types';

import Header from 'src/components/Header';
import Detail from 'src/components/Detail';
import Association from 'src/containers/Association';
import AddCheeseProposal from 'src/containers/AddCheeseProposal';
import Footer from 'src/containers/Footer';

import './styles.scss';

const WineDetail = ({
  slug,
  name,
  picture,
  description,
  cheesesList,
  cheeses,
  origin,
}) => (
  <div className="wineDetail">
    <Header />
    <Detail
      slug={slug}
      name={name}
      picture={picture}
      description={description}
      product="vin"
      origin={origin}
    />
    <Association
      associatedProduct={cheeses}
      slug={slug}
      link="fromage"
    />
    <AddCheeseProposal
      name={name}
      image={picture}
      product="fromage"
      propositions={cheesesList}
      slug={slug}
    />
    <Footer />
  </div>
);

WineDetail.propTypes = {
  slug: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  cheeses: PropTypes.array.isRequired,
  cheesesList: PropTypes.array.isRequired,
  origin: PropTypes.array.isRequired,
};

export default WineDetail;
