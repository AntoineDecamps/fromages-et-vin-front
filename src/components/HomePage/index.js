import React from 'react';
import PropTypes from 'prop-types';

import MainHeader from 'src/components/HomePage/MainHeader';
import Blurb from 'src/components/HomePage/Blurb';
import Concept from 'src/components/HomePage/Concept';
import Footer from 'src/components/Footer';

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
