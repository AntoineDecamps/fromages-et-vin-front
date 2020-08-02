import React from 'react';
import PropTypes from 'prop-types';

import BackHeader from 'src/components/BackOffice/BackHeader';
import BackHomePage from 'src/components/BackOffice/BackHomePage';
import SideBar from 'src/components/BackOffice/SideBar';
import Add from 'src/components/BackOffice/Add';
import Produits from 'src/containers/Produits';
import Users from 'src/components/BackOffice/Users';

import './styles.scss';

const BackOffice = () => (
  <div className="backOffice">
    <BackHeader />
    <BackHomePage />
    <SideBar />
    {/* <Produits /> */}
    {/* <Add /> */}
    {/* <Products /> */}
    {/* <Users /> */}
  </div>
);

BackOffice.propTypes = {};

export default BackOffice;
