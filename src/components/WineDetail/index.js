import React from 'react';
import PropTypes from 'prop-types';

import Header from 'src/components/Header';
import Detail from 'src/components/Detail';
import Association from 'src/containers/Association';
import AddProposal from 'src/containers/AddProposal';
import Footer from 'src/containers/Footer';

import './styles.scss';

const WineDetail = ({
  slug,
  name,
  picture,
  description,
  cheesesList,
  cheeses,
}) => {
  console.log('cheeses?', cheeses);
  return (
    <div className="wineDetail">
      <Header />
      <Detail
        slug={slug}
        name={name}
        picture={picture}
        description={description}
      />
      <Association
        associatedProduct={cheeses}
      />
      <Footer />
      <AddProposal
        name={name}
        image={picture}
        product="fromage"
        propositions={cheesesList}
      />
    </div>
)};

WineDetail.propTypes = {
  slug: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  cheeses: PropTypes.array.isRequired,
  cheesesList: PropTypes.array.isRequired,
};

export default WineDetail;
