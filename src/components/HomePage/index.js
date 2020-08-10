import React from 'react';

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

export default HomePage;
