import React from 'react';
import PropTypes from 'prop-types';

import Header from 'src/components/Header';
import Detail from 'src/components/Detail';
import Association from 'src/containers/Association';
import AddProposal from 'src/containers/AddProposal';
import Footer from 'src/containers/Footer';

import './styles.scss';

// This component should have been called CheeseDetail but as we cant dynamise it for
// wines and cheeses we decided to let the name but it is only use for cheeses
// WINES will be display in the WineDetail component
const CheeseDetail = ({
  slug,
  name,
  picture,
  description,
  wines,
  winesList,
  cheesesList,
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
};

export default CheeseDetail;
