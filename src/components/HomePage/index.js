import React from 'react';
import PropTypes from 'prop-types';

import MainHeader from 'src/containers/MainHeader';
import Blurb from 'src/components/HomePage/Blurb';
import Concept from 'src/components/HomePage/Concept';
import Footer from 'src/containers/Footer';

import './styles.scss';

const HomePage = () => (
  <div className="homepage">
    <MainHeader />
    <Concept />
    <Blurb />
    <Footer />
  </div>
);

HomePage.propTypes = {};

export default HomePage;
