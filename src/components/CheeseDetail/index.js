import React from 'react';
import PropTypes from 'prop-types';

import Header from 'src/components/Header';
import Detail from 'src/components/Detail';
import Association from 'src/containers/Association';
import AddProposal from 'src/containers/AddProposal';
import Footer from 'src/containers/Footer';

import './styles.scss';

const CheeseDetail = ({
  slug,
  name,
  picture,
  description,
  wines,
  winesList,
}) => (
  <div className="cheeseDetail">
    <Header />
    <Detail
      slug={slug}
      name={name}
      picture={picture}
      description={description}
    />
    <Association
      associatedProduct={wines}
    />
    <AddProposal
      name={name}
      image={picture}
      product="vin"
      propositions={winesList}
    />
    <Footer />
  </div>
);

CheeseDetail.propTypes = {
  slug: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  wines: PropTypes.array.isRequired,
  winesList: PropTypes.array.isRequired,
};

export default CheeseDetail;
