import React from 'react';
import PropTypes from 'prop-types';

import Header from 'src/components/Header';
import Detail from 'src/components/Detail';
import Association from 'src/containers/Association';
import AddWineProposal from 'src/containers/AddWineProposal';
import Footer from 'src/containers/Footer';

import './styles.scss';

const CheeseDetail = ({
  slug,
  name,
  picture,
  description,
  wines,
  winesList,
  origin,
  milk,
}) => (
  <div className="cheeseDetail">
    <Header />
    <Detail
      slug={slug}
      name={name}
      picture={picture}
      description={description}
      product="fromage"
      milk={milk}
      origin={origin}
    />
    <Association
      associatedProduct={wines}
      slug={slug}
      link="vin"
    />
    <AddWineProposal
      name={name}
      image={picture}
      product="vin"
      propositions={winesList}
      slug={slug}
    />
    <Footer />
  </div>
);

CheeseDetail.propTypes = {
  slug: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  milk: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  wines: PropTypes.array.isRequired,
  winesList: PropTypes.array.isRequired,
};

export default CheeseDetail;
